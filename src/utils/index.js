const randomArrItem = items => items[Math.random() * items.length | 0];

function decodeEntities(encodedString) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}
export default {
    isObject,
    randomArrItem,
    decodeEntities,
}
