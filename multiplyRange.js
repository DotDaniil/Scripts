const multiplyRange = (start, finish) => {
    let result = start

    while (start !== finish) {
        start++;
        result *= start;
    }
    return result;
}

console.log(multiplyRange(2,2));