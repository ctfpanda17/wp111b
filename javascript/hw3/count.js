var list = ['a', 'dog', 'chase', 'a', 'cat']
function count(list) {
    let cmap = {}
    for (let i=0; i<list.length; i++) {
        var lists = list[i]
        if (cmap[lists])
            cmap[lists]++
        else
            cmap[lists] = 1
    }
    return cmap
}
console.log(count(list))