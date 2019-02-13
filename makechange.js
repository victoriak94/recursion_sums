function makeChange(n, arr) {
    if (n < 1) {
        return arr;
    }
    else {
        if (n >= 25) {
            n -= 25;
            arr[0]++;
        } else if (n >= 10) {
            n -= 10;
            arr[1]++;
        } else if (n >= 5) {
            n -= 5;
            arr[2]++;
        } else {
            n -= 1;
            arr[3]++;
        }
    }
    return makeChange(n, arr);
}

console.log(makeChange(100, [0, 0, 0, 0]));
console.log(makeChange(168, [0, 0, 0, 0]));

