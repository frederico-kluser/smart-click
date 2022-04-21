import { modalPrompt } from "../components/Modal";
import eventEmitter from "./event";
import { getStringBetween, stringReplaceAll } from "./general";
import { variableNameGetter, xmlGetter } from "./globalVariables";

export const windowPrompt = async () => {
  const xml = xmlGetter();
  const promptText = variableNameGetter('varName');//"Rename all 'item' variables to:";

  const variablePreviousName = getStringBetween(promptText, "'");
  const variableNextName = await modalPrompt({
    tile: 'Rename Variable',
    subTitle: `Rename the variable '${variablePreviousName}' to:`,
    placeholder: "New variable name",
  });

  const newXML = stringReplaceAll(xml, variablePreviousName, variableNextName); 
  eventEmitter.emit('changeXML', newXML);
};
