
export function cutDescriptionText(text) {
    if (text.length >= 63) {
        return text.slice(0, 63) + `...`
    }
    return text;
}