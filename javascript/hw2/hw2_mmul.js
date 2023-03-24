function mmul(a, b) {
    let r = [[], []]
    let sum=0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            for (let k=0 ; k<b.length; k++) {
                sum += a[i][k] * b[k][j];
            }
            r[i][j] = sum
        }
    }
    return r
}

let a = [[1, 2], [3, 4]]
let b = [[1, 1], [1, 1]]
let c = mmul(a, b)
console.log(c)
