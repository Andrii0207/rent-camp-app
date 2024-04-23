export function checkResponse(
    prev,
    newList,
    key
) {
    console.log("prev >>", prev)
    console.log("newList >>", newList)
    const iDs = newList.map(item => item[key]);
    return prev.some(item => iDs.includes(item[key]));
};