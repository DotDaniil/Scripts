const searchRange = (nums, target) => {
    const result = [];
    result.push(nums.indexOf(target),nums.lastIndexOf(target));
    if (result.length < 1) result = [-1, -1];
    return result
}