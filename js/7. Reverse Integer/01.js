var reverse = function(x) {
    let maxInteger = Math.pow(2, 31) - 1
    let minInteger = -(Math.pow(2, 31))
    let a = (Math.abs(x)).toString().split('')
    let b = Math.sign(x)

    let c = a.reverse()
    let d = b * Number(c.join(''))
    if (d <= maxInteger && d >= minInteger ) return d
    else return 0
}

reverse(123)