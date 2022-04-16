const { put } = require("./crud");
const { switchMacroActived } = require("./urls");

const switchMacroById = (macroId, actived) => put(switchMacroActived + macroId, actived);

export default switchMacroById;
