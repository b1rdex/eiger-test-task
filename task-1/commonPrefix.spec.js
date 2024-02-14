
import {commonPrefix, doCommonPrefix} from "./commonPrefix.js";

console.assert(doCommonPrefix('abcabcd') === 10, doCommonPrefix('abcabcd'));

console.assert(
    commonPrefix(['abcabcd', 'ababaa', 'aa']).toString() === [10, 11, 3].toString(),
    commonPrefix(['abcabcd', 'ababaa', 'aa'])
);
