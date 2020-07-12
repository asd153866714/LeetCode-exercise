var numJewelsInStones = function(J, S) {
    let map = new Map()
    let count = 0
    for (const i of J) {
        map.set(i, i)
        console.log(i)
    }
    for (let i of S) {
        if (map.get(i)) {
            count ++
        }
    }
    return count
};

console.log(numJewelsInStones("aA", "aAAbbbb"))
// use Map