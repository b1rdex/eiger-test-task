/**
 * @param {Array<string>} inputs
 *
 * @return {Array<number>}
 */
export function commonPrefix(inputs) {
    /** @var {Array<number>} */
    const result = [];
    for (const input of inputs) {
        result.push(doCommonPrefix(input));
    }

    return result;
}

/**
 * @param {string} input
 *
 * @return {number}
 */
export function doCommonPrefix(input) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        let commonPrefixLength = 0;
        const suffix = input.substring(i);
        for (let k = 0; k < suffix.length; k++) {
            if (input[k] !== suffix[k]) {
                break;
            }
            commonPrefixLength = k + 1;
        }
        result.push(commonPrefixLength);
    }
    return result.reduce((a, b) => a + b, 0);
}
