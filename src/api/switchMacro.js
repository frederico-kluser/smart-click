const { put } = require("./crud");
const { switchMacroActivedURL } = require("./urls");

const switchMacroById = (macroId, actived) => put(switchMacroActivedURL + macroId, actived);

export default switchMacroById;
