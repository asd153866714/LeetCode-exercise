var numJewelsInStones = function(J, S) {
    let jewls = new Set(J.split(''))
    return S.split('').filter(x => jewls.has(x)).length
};

console.log(numJewelsInStones("aA", "aAAbbbb"))
// use Set and Array.filter()