var CustomStack = function(maxSize) {
    this.maxSize = maxSize
    this.size = 0
    this.arr = []
};

CustomStack.prototype.push = function(x) {
    if (this.size < this.maxSize) {
        this.arr.push(x)
        this.size ++
    }
};

CustomStack.prototype.pop = function() {
    if (this.size === 0) return -1
    this.size --
    return this.arr.pop()
};

CustomStack.prototype.increment = function(k, val) {
    for (let i=0; i < k && i < this.size; i++) {
        this.arr[i] += val
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */