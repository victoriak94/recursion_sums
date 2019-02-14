function flatten(aa, result=[]) {
    for (let i = 0; i < aa.length; i++) {
        if (!Array.isArray(aa[i])) {
            result.push(aa[i]);
        } else {
            let flattened = flatten(aa[i]);
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        }
    }
    return result;
}

const a1 = [1, 2, 3, [4, 5]];
const a2 = [[[1]]];
const a3 = [1, [2, [3]], 4, [5, 6], [[[7]]]];

console.log(flatten(a1));
console.log(flatten(a2));
console.log(flatten(a3));