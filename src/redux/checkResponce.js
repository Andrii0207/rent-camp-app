export function checkResponse(
    prevState,
    nextState,
    key
) {
    const idArr = nextState.map(item => item[key]);
    return prevState.some(item => idArr.includes(item[key]));
};