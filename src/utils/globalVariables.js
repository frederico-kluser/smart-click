let xml = '';
export const xmlGetter = () => xml;
export const xmlSetter = (value) => {
  xml = value;
};

let lastCode = undefined;

let variableName = {};
export const variableNameGetter = (property) => variableName[property];
export const variableNameSetter = (property, value) => {
  variableName[property] = value;
  if (lastCode !== variableName.code) {
    lastCode = variableName.code;
    console.log('-------------------------------------------------');
    console.log(new Date().toString());
    console.log(variableName);
    console.log(variableName.code);
  }
};
