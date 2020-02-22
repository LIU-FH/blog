import qs from "qs";

const randomArrItem = items => items[Math.random() * items.length | 0];

function decodeEntities(encodedString) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

function qsStringifyParams(params) {
    let queryArr = []
    for (let key in params){
        if (isObject(params[key])) {
            queryArr.push(qs.stringify({[key]: params[key]}, {encode: false}))
        } else {
            queryArr.push(key + '=' + params[key])
        }
    }
    return queryArr.join('&')
}
function qsParseParams(params) {
    return qs.parse(params)
}
export default {
    isObject,
    randomArrItem,
    decodeEntities,
    qsStringifyParams,
    qsParseParams,
}
