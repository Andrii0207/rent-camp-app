import { OptionData } from "./OptionData";





export function updateOptionsList(data) {

    const commonOptions = { ...data, ...data.details };
    const optionsList = [];

    Object.keys(commonOptions).forEach(key => OptionData[key] && optionsList.push({ key, value: commonOptions[key] }));

    return optionsList;
}