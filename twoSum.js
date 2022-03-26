const twoSum = (nums, target) => {
    const result = [];
        for (let i = 0; i< nums.length; i++) {
            if (nums.indexOf(target - nums[i]) !== -1 && i !== nums.indexOf(target / 2)) {
                result.push(nums.indexOf(target - nums[i]));
            };
        }
        if (result.length === 1) result.push(nums.lastIndexOf(target / 2));
        return result
}

console.log(twoSum([3,3], 6))