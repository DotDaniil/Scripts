const intersection = (nums1, nums2) => {
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
        nums1.indexOf(nums2[i]) !== -1 ? result.push(nums2[i]) : null;
    }
    return Array.from(new Set(result));
}

intersection([4,9,5], [9,4,9,8,4])