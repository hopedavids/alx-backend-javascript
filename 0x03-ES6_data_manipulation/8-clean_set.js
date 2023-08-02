#!/usr/bin/node

export default function cleanSet(set, startString){
    let result = '';
    for (const value of set) {
        if (value.startsWith(startString)) {
            const restOfString = value.slice(startString.length);
            if (result) {
                result += '-' + restOfString;
            } else {
                result += restOfString;
            }
        }
    }
    return result;
}