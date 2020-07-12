let twoSum = (nums, target) => {
    let diffMap = new Map();
    for(let i=0;i<nums.length; i++){
        if(diffMap.has(target-nums[i])){
            console.log([diffMap.get(target-nums[i]), i])
            return [diffMap.get(target-nums[i]), i];
        } 
        diffMap.set(nums[i], i);
    }
    return [];
};

twoSum([2, 7, 11, 15], 26)
twoSum([3,2,4], 5)