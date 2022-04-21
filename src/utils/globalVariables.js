let xml = '';
export const xmlGetter = () => xml;
export const xmlSetter = (value) => {
  xml = value;
};

let variableName = {};
export const variableNameGetter = (property) => variableName[property];
export const variableNameSetter = (property, value) => {
  variableName[property] = value;
  // console.log('variableName :', variableName);
};