function repeat(f,n){
    let r=[]
    for (let i=0; i<n; i++){
        r[i] = f()
    }
    return r
}
let random = repeat(Math.random,10)
for(let i=0; i<10; i++){
    console.log(random[i])
}

