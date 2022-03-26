const thirdMax = (nums) => {
    let result = [...new Set(nums)].sort((a, b) => a - b)
    return result.length >= 3 ? result[result.length - 3] : result[result.length - 1];
};

console.log(thirdMax([3,3,4,3,4,3,0,3,3]))