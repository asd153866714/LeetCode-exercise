/**
 * Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
 * Return the number of negative numbers in grid
 */
// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
var countNegatives = function(grid) {
    let count = 0
    for (let row of grid) {
        let left = 0,
            right = row.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (row[mid] < 0) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        count += row.length - left
    }
    return count
};

let test = countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
console.log(test)
// use Binary Search
// because row of grid is decreasing, if mid < 0 => all of right < 0, so seach left side
// left index is the start index for negative number