const { del } = require("./crud");
const { deleteMacroURL } = require("./urls");

const deleteMacroById = (macroId) => del(deleteMacroURL, macroId);

export default deleteMacroById;
