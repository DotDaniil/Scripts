const merge = (nums1, m, nums2, n) => {
    for (let i = m, j = 0; j < n; i++, j++) nums1[i] = nums2[j]
    nums1.sort((a, b) => a - b)
};

console.log(merge([1,3,2,4,5],2,[5,2,4,6],2))