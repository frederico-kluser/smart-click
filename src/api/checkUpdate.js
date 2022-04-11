import { compareObject } from "../utils/general";
import { get } from "./crud";
import { AllMacrosURL } from "./urls";

const checkUpdate = async (macros, setMacros, setLoaded) => {
  let data = await get(AllMacrosURL);
  setMacros(data);
	setLoaded(true);

	while (true) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		data = await get(AllMacrosURL);
    if (!data.length || !compareObject(macros, data)) {
      setMacros(data);
    }
	}
};

export default checkUpdate;
