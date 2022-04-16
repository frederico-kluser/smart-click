let xml = '';
export const xmlGetter = () => xml;
export const xmlSetter = (value) => {
  xml = value;
};

let variableName = '';
export const variableNameGetter = () => variableName;
export const variableNameSetter = (value) => {
  variableName = value;
  console.log('variableName :', variableName);
};