export const compareObject = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

export const getStringBetween = (str, start, end) => {
  const startIndex = str.indexOf(start);
  const endIndex = str.indexOf(end || start, startIndex + 1);
  return str.substring(startIndex + start.length, endIndex);
};

export const stringReplaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, 'g'), replace);
};
