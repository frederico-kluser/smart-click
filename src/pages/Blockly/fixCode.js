// const { loadImagePath } = require('../core/storage');
const loadImagePath = () => {};
const { regexFind, regexRule } = require('../../utils/regex');

const dependencyFixed = (code) => {
  let dependencies = '';
  let fixedCode = code;

  if (fixedCode.match(/pyautogui/g)) {
    dependencies += 'import pyautogui\n';
  }
  if (fixedCode.match(/time.sleep/g)) {
    dependencies += 'import time\n';
  }
  if (fixedCode.match(regexRule.image)) {
    dependencies += 'from PIL import Image\n';
  }
  if (fixedCode.match(/screenToText/g)) {
    dependencies += 'import mss\n';
    dependencies += 'import mss.tools\n';
    dependencies += 'import cv2\n';
    dependencies += 'import pytesseract\n';
    dependencies += `
def imageToText(url, toInt = False):
  img = cv2.imread(url)
  result = (pytesseract.image_to_string(img)).strip()
  if toInt:
    result = int(result)
  return result

def screenToText(fromX, fromY, toX, toY, toInt = False):
  result = ''
  with mss.mss() as sct:
    # The screen part to capture
    monitor = {"top": fromX, "left": fromY, "width": toX - fromX, "height": toY - fromY }
    output = "monitor-1.png"

    # Grab the data
    sct_img = sct.grab(monitor)

    # Save to the picture file
    mss.tools.to_png(sct_img.rgb, sct_img.size, output=output)
    result = imageToText(output, toInt)
  return result`;
  }
  if (fixedCode.match(/findImage\(/g)) {
    if (!dependencies.match(/pyautogui/g)) {
      dependencies = `import pyautogui\n${dependencies}`;
    }
    if (!dependencies.match(/ mss /g)) {
      dependencies = `from mss import mss\n${dependencies}`;
    }

    dependencies += `
positionX = 0
positionY = 0
def findImage(shortURL, options = {}):
  with mss() as sct:
    sct.shot()
  main = Image.open('monitor-1.png').convert('L')
  mainLoaded = main.load()
  short = Image.open(shortURL).convert('L')
  shortLoaded = short.load()
  
  fromX = options.get('fromX', 0)
  fromY = options.get('fromY', 0)
  toX = options.get('toX', main.width) - short.width
  toY = options.get('toY', main.height) - short.height

  mouseWill = options.get('mouseWill', 'nothing')

  global positionX, positionY
  positionX = -1
  positionY = -1

  def matchLocation(mX, mY):
    match = True
    global positionX, positionY
    for y in range(short.height):
      for x in range(short.width):
        if shortLoaded[x, y] != mainLoaded[mX + x, mY + y]:
          match = False
          break
      if match == False:
        break
    if match == True:
      positionX = mX
      positionY = mY
    return match

  def iterateMainImage():
    match = False
    for y in range(fromY, toY):
      for x in range(fromX, toX):
        match = matchLocation(x, y)
        if match == True:
          break
      if match == True:
        break
  
  iterateMainImage()
  
  if mouseWill == 'left_click':
    pyautogui.click(positionX, positionY)
  elif mouseWill == 'double_click':
    pyautogui.doubleClick(positionX, positionY)
  elif mouseWill == 'right_click':
    pyautogui.rightClick(positionX, positionY)
  elif mouseWill == 'middle_click':
    pyautogui.middleClick(positionX, positionY)
  elif mouseWill == 'drag_and_drop':
    pyautogui.dragTo(positionX, positionY)
  elif mouseWill == 'move_to':
    pyautogui.moveTo(positionX, positionY)
  
  return positionX != -1 and positionY != -1\n`;
  }

  if (dependencies) {
    fixedCode = `${dependencies}\n${code}`;
  }

  return fixedCode;
};

const codeFixer = (code) => {
  let fixedCode = code;

  const images = regexFind.image(code);
  let imageInputs = '';
  images.forEach((image) => {
    const lastValue = loadImagePath(image) || '';
    fixedCode = `${image} = '${lastValue}'\n${fixedCode}`;
    imageInputs += `
<div class="default-margin input-group mb-3" style="margin-bottom: 0px !important;">
  <input type="file" class="form-control" id="${image}" onchange="saveImagePath(this.id, this.files[0].path)">
  <div id="${image}_label" class="file_placeholder ${lastValue ? '' : 'none'}">${lastValue}</div>
  <label class="input-group-text" for="inputGroupFile02">${image}</label>
</div>`;
  });
  Object.keys(window.localStorage).forEach((key) => {
    if (key.match(regexRule.image) && !images.includes(key)) {
      window.localStorage.removeItem(key);
    }
  });
  // document.getElementById('image_selectors').innerHTML = imageInputs;

  return dependencyFixed(fixedCode);
};

module.exports = {
  codeFixer,
};
