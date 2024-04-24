export function checkResponse(
    prevState,
    nextState,
    key
) {
    const arrID = nextState.map(item => item[key]);
    return prevState.some(item => arrID.includes(item[key]));
};