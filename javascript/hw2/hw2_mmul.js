function mmul(a, b) {
    let r=[[0,0],[0,0]]
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          r[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    
    return r;
  }
let a =[[1,2],[3,4]]
let b =[[1,1],[1,1]]
let c = mmul(a,b)
console.log(c)