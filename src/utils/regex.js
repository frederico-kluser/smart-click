/* eslint-disable prefer-regex-literals */

const regexRule = {
  image: /image_[0-9]*_file/g,
};

const image = (code) => {
  const result = code.match(/image_[0-9]*_file/g);
  const matchs = [];
  if (result) {
    result.forEach((item) => {
      if (!matchs.includes(item)) {
        matchs.push(item);
      }
    });
  }

  return matchs;
};

const regexFind = {
  image,
};

module.exports = {
  regexFind,
  regexRule,
};
