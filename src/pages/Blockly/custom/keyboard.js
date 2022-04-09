const Blockly = require('blockly');

// keyboard type variable interval
(() => {
  Blockly.Blocks.keyboard_type_variabel_interval = {
    init() {
      this.appendDummyInput().appendField('keyboard type');
      this.appendValueInput('keyboard_content').setCheck(['Number', 'String']);
      this.appendDummyInput().appendField('milliseconds interval');
      this.appendValueInput('interval_time').setCheck('Number');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.keyboard_type_variabel_interval = (block) => {
    const keyboardContent = Blockly.Python.valueToCode(block, 'keyboard_content', Blockly.Python.ORDER_ATOMIC);
    const intervalTime = Blockly.Python.valueToCode(block, 'interval_time', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = `pyautogui.write(${keyboardContent}, ${intervalTime / 1000})\n`;
    return code;
  };
})();

// keyboard type number interval
(() => {
  Blockly.Blocks.keyboard_type_number_interval = {
    init() {
      this.appendDummyInput().appendField('keyboard type');
      this.appendValueInput('keyboard_content').setCheck(['Number', 'String']);
      this.appendDummyInput().appendField('milliseconds interval').appendField(new Blockly.FieldNumber(0, 0), 'interval_time');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.keyboard_type_number_interval = (block) => {
    const keyboardContent = Blockly.Python.valueToCode(block, 'keyboard_content', Blockly.Python.ORDER_ATOMIC);
    const intervalTime = block.getFieldValue('interval_time');
    // TODO: Assemble Python into code variable.
    const code = `pyautogui.write(${keyboardContent}, ${intervalTime / 1000})\n`;
    return code;
  };
})();

// hotkey
(() => {
  Blockly.Blocks.keyboard_hotkey = {
    init() {
      this.appendDummyInput()
        .appendField('while pressing')
        .appendField(
          new Blockly.FieldDropdown([
            ['Control', 'ctrl'],
            ['Shift', 'shift'],
            ['Alt', 'alt'],
          ]),
          'pressing_key',
        );
      this.appendStatementInput('codeInside').setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.keyboard_hotkey = (block) => {
    const pressingKey = block.getFieldValue('pressing_key');
    const codeInside = Blockly.Python.statementToCode(block, 'codeInside');
    // TODO: Assemble Python into code variable.
    const code = `with pyautogui.hold('${pressingKey}'):\n${codeInside}\n`;
    return code;
  };
})();

// keyboard press
(() => {
  Blockly.Blocks.keyboard_press = {
    init() {
      this.appendDummyInput()
        .appendField('press key')
        .appendField(
          new Blockly.FieldDropdown([
            [' ', ' '],
            ['!', '!'],
            ['"', '"'],
            ['#', '#'],
            ['$', '$'],
            ['%', '%'],
            ['&', '&'],
            ["'", "'"],
            ['(', '('],
            [')', ')'],
            ['*', '*'],
            ['+', '+'],
            [',', ','],
            ['-', '-'],
            ['.', '.'],
            ['/', '/'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9'],
            [':', ':'],
            [';', ';'],
            ['<', '<'],
            ['=', '='],
            ['>', '>'],
            ['?', '?'],
            ['@', '@'],
            ['[', '['],
            ['\\', '\\\\'],
            [']', ']'],
            ['^', '^'],
            ['_', '_'],
            ['`', '`'],
            ['a', 'a'],
            ['b', 'b'],
            ['c', 'c'],
            ['d', 'd'],
            ['e', 'e'],
            ['f', 'f'],
            ['g', 'g'],
            ['h', 'h'],
            ['i', 'i'],
            ['j', 'j'],
            ['k', 'k'],
            ['l', 'l'],
            ['m', 'm'],
            ['n', 'n'],
            ['o', 'o'],
            ['p', 'p'],
            ['q', 'q'],
            ['r', 'r'],
            ['s', 's'],
            ['t', 't'],
            ['u', 'u'],
            ['v', 'v'],
            ['w', 'w'],
            ['x', 'x'],
            ['y', 'y'],
            ['z', 'z'],
            ['{', '{'],
            ['|', '|'],
            ['}', '}'],
            ['~', '~'],
            ['accept', 'accept'],
            ['add', 'add'],
            ['alt', 'alt'],
            ['altleft', 'altleft'],
            ['altright', 'altright'],
            ['apps', 'apps'],
            ['backspace', 'backspace'],
            ['browserback', 'browserback'],
            ['browserfavorites', 'browserfavorites'],
            ['browserforward', 'browserforward'],
            ['browserhome', 'browserhome'],
            ['browserrefresh', 'browserrefresh'],
            ['browsersearch', 'browsersearch'],
            ['browserstop', 'browserstop'],
            ['capslock', 'capslock'],
            ['clear', 'clear'],
            ['convert', 'convert'],
            ['ctrl', 'ctrl'],
            ['ctrlleft', 'ctrlleft'],
            ['ctrlright', 'ctrlright'],
            ['decimal', 'decimal'],
            ['del', 'del'],
            ['delete', 'delete'],
            ['divide', 'divide'],
            ['down', 'down'],
            ['end', 'end'],
            ['enter', 'enter'],
            ['esc', 'esc'],
            ['escape', 'escape'],
            ['execute', 'execute'],
            ['f1', 'f1'],
            ['f10', 'f10'],
            ['f11', 'f11'],
            ['f12', 'f12'],
            ['f13', 'f13'],
            ['f14', 'f14'],
            ['f15', 'f15'],
            ['f16', 'f16'],
            ['f17', 'f17'],
            ['f18', 'f18'],
            ['f19', 'f19'],
            ['f2', 'f2'],
            ['f20', 'f20'],
            ['f21', 'f21'],
            ['f22', 'f22'],
            ['f23', 'f23'],
            ['f24', 'f24'],
            ['f3', 'f3'],
            ['f4', 'f4'],
            ['f5', 'f5'],
            ['f6', 'f6'],
            ['f7', 'f7'],
            ['f8', 'f8'],
            ['f9', 'f9'],
            ['final', 'final'],
            ['fn', 'fn'],
            ['hanguel', 'hanguel'],
            ['hangul', 'hangul'],
            ['hanja', 'hanja'],
            ['help', 'help'],
            ['home', 'home'],
            ['insert', 'insert'],
            ['junja', 'junja'],
            ['kana', 'kana'],
            ['kanji', 'kanji'],
            ['launchapp1', 'launchapp1'],
            ['launchapp2', 'launchapp2'],
            ['launchmail', 'launchmail'],
            ['launchmediaselect', 'launchmediaselect'],
            ['left', 'left'],
            ['modechange', 'modechange'],
            ['multiply', 'multiply'],
            ['nexttrack', 'nexttrack'],
            ['nonconvert', 'nonconvert'],
            ['num0', 'num0'],
            ['num1', 'num1'],
            ['num2', 'num2'],
            ['num3', 'num3'],
            ['num4', 'num4'],
            ['num5', 'num5'],
            ['num6', 'num6'],
            ['num7', 'num7'],
            ['num8', 'num8'],
            ['num9', 'num9'],
            ['numlock', 'numlock'],
            ['pagedown', 'pagedown'],
            ['pageup', 'pageup'],
            ['pause', 'pause'],
            ['pgdn', 'pgdn'],
            ['pgup', 'pgup'],
            ['playpause', 'playpause'],
            ['prevtrack', 'prevtrack'],
            ['print', 'print'],
            ['printscreen', 'printscreen'],
            ['prntscrn', 'prntscrn'],
            ['prtsc', 'prtsc'],
            ['prtscr', 'prtscr'],
            ['return', 'return'],
            ['right', 'right'],
            ['scrolllock', 'scrolllock'],
            ['select', 'select'],
            ['separator', 'separator'],
            ['shift', 'shift'],
            ['shiftleft', 'shiftleft'],
            ['shiftright', 'shiftright'],
            ['sleep', 'sleep'],
            ['space', 'space'],
            ['stop', 'stop'],
            ['subtract', 'subtract'],
            ['tab', 'tab'],
            ['up', 'up'],
            ['volumedown', 'volumedown'],
            ['volumemute', 'volumemute'],
            ['volumeup', 'volumeup'],
            ['win', 'win'],
            ['winleft', 'winleft'],
            ['winright', 'winright'],
            ['yen', 'yen'],
            ['command', 'command'],
            ['option', 'option'],
            ['optionleft', 'optionleft'],
            ['optionright', 'optionright'],
          ]),
          'press_key',
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.keyboard_press = (block) => {
    const pressKey = block.getFieldValue('press_key');
    // TODO: Assemble Python into code variable.
    const code = `pyautogui.press('${pressKey}')\n`;
    return code;
  };
})();
