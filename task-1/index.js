import { createInterface } from "node:readline"
import {commonPrefix} from "./commonPrefix.js";

let testCasesCount;
let inputs = [];
for await (const line of createInterface({ input: process.stdin })) {
    if (undefined === testCasesCount) {
        const count = Number(line);
        if (count < 1 || isNaN(count)) {
            console.error('Please enter tests count (number)', {input: line});
            continue;
        }
        testCasesCount = count;
        continue;
    }
    inputs.push(line);
    if (inputs.length < testCasesCount) {
        continue;
    }

    const result = commonPrefix(inputs);
    console.log(result.reduce((a, b) => a + b, 0));

    testCasesCount = undefined;
    inputs = [];
}
