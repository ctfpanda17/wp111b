function vdot(a,b) {
    let r=[]
    for (let i=0 ; i<a.length ; i++) {
        r[i] = a[i] * b[i]
    }
    return r[0] + r[1]
}

let v1 = [1,2], v2 = [1,1]
console.log('vdot(v1,v2)=',vdot(v1,v2))