class Matrix {
    constructor(m) {
        this.m = m
    }

    add(b) {
        let n = []
        for (let i=0; i < this.m.length; i++) {
            n[i] = []
            for(let j=0; j < this.m[i].length; j++){
                n[i][j] = this.m[i][j]  + b[i][j]
            }
        }
    return n
    }

    mul(b) {
        let n = []
        for (let i=0; i < this.m.length; i++) {
            n[i] = []
            for (let j=0; j < b[0].length; j++){
                let sum=0
                for (let k=0; k < this.m[0].length; k++) {
                    sum += this.m[i][k] * b[k][i]
                }
                n[i][j] = sum
            }
        }
        return n
    } 
}
let a = [[1, 2],[3,4]]
let b = [[5, 6],[7,8]]
let N = new Matrix(a)

console.log("add=",N.add(b))

console.log("mul=",N.mul(b))