const containsDuplicate = (arr) => {
    return new Set(arr).size !== arr.length;
}

console.log(containsDuplicate([1,2,3,1]))