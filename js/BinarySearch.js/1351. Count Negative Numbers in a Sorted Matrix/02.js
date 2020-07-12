var countNegatives = function(grid) {
    let ans = grid.map(x => x.filter(y => y < 0).length).reduce((a, b) => a+b)
    return ans
};

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])