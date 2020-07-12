var runningSum = function(nums) {
    let arr = [nums[0]]
    let i = 1

    while (i < nums.length) {
        arr[i] = nums[i] + arr[i-1]
        i += 1
    }
    return arr
};

console.log(runningSum([1,2,3,4]))