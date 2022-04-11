import { compareObject } from "../utils/general";
import { get } from "./crud";
import { AllMacros } from "./urls";



async function checkUpdate(macros, setMacros, setLoaded) {

  let data = await get(AllMacros);
  setMacros(data);
	setLoaded(true);

	while (true) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		let data = await get(AllMacros);
    if (!data.length || !compareObject(macros, data)) {
      setMacros(data);
    }
	}
}

export default checkUpdate;
