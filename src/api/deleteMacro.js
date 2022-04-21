import { modalAlert } from "../components/Modal";

const { del } = require("./crud");
const { deleteMacroURL } = require("./urls");

const deleteMacroById = async (macroId) => {
  try {
    await del(deleteMacroURL + macroId);
  } catch (err) {
    console.log('err :', err);
  } finally {
    modalAlert({
      title: "Macro deleted successfully",
      subText: "",
    })
  }
};

export default deleteMacroById;
