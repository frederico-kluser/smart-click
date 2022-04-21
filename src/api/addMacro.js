const { post } = require("./crud");
const { addMacroURL } = require("./urls");

const addMacro = (data) => post(addMacroURL, data);

export default addMacro;
