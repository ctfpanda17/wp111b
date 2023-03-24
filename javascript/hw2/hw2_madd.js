function madd(a,b) {
    let r=[[],[]]
    for (let i=0 ; i<a.length ; i++){
        for (let j=0 ; j<a[0].length ; j++) {
            r[i][j] = a[i][j] + b[i][j]
        }
    }
    return r
}

let a=[[1,2],[3,4]]
let b=[[1,1],[1,1]]
let c=madd(a,b)
console.log(c)
