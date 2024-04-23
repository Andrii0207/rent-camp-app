export function checkResponse(
    prev,
    newList,
    key
) {
    const iDs = newList.map(item => item[key]);
    return prev.some(item => iDs.includes(item[key]));
};