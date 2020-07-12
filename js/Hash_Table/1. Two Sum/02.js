var twoSum = function(nums, target) {
    let map = new Map()
    for (var i=0; i<nums.length; i++){
        if (map.has(target - nums[i])){
            console.log([map.get(nums[i]), i])
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
    return []
}

twoSum([2, 7, 11, 15], 26)
twoSum([3,2,4], 5)