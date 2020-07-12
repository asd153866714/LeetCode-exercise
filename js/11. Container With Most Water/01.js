/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    for (i=0; i<height.length; i++){
        for ( j=i+1; j<height.length; j++){
            maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j-i))
        }
    }
    return maxArea
};

maxArea([1,8,6,2,5,4,8,3,7])