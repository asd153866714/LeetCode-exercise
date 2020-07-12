class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize
        this.arr = []
    }

    push(x) {
        if (this.arr.length < this.maxSize) {
            this.arr.push(x)
        }
    }
    pop() {
        if (this.arr.length === 0) return -1
        return this.arr.pop()
    }
    increament(k, val) {
        for (let i=0; i < k && i < this.arr.length; i++) {
            this.arr[i] += val
        }
    }
}