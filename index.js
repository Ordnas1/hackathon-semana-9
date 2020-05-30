const caesarShift = function(char, shift, low, high) {
    let charCode = char.charCodeAt();
    if (shift >= 0) {
        for (let i = 0; i < shift; i++) {
            charCode + 1 > high ? charCode = low : charCode += 1;
        }
    } else {
        for (let i = 0 - shift; i > 0; i--) {
            charCode - 1 < low ? charCode = high : charCode -= 1;
        }
    }

    return String.fromCharCode(charCode)
}

const caesarencode = function(cypherNumber, cypherText) {
    const ASCII_UPPER_A = 65;
    const ASCII_UPPER_Z = 90;
    const ASCII_LOWER_A = 97;
    const ASCII_LOWER_Z = 122

    let resultStr = ""

    for (let i = 0; i < cypherText.length; i++) {
        if (cypherText.charCodeAt(i) >= ASCII_UPPER_A && cypherText.charCodeAt(i) <= ASCII_UPPER_Z) {
            resultStr += caesarShift(cypherText.charAt(i), cypherNumber, ASCII_UPPER_A, ASCII_UPPER_Z);
        } else if (cypherText.charCodeAt(i) >= ASCII_LOWER_A && cypherText.charCodeAt(i) <= ASCII_LOWER_Z) {
            resultStr += caesarShift(cypherText.charAt(i), cypherNumber, ASCII_LOWER_A, ASCII_LOWER_Z);
        } else {
            resultStr += cypherText.charAt(i)
        }
    }

    return resultStr
}

const caesardecode = function(cypherNumber,textDecode) {
    return caesarencode(-cypherNumber, textDecode)
}