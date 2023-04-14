var m2i = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
}


function month(m) {
    var index = []
    for (let i in m) {
        var mmonth = m[i]
        var imonth = m2i[mmonth]
        index.push(imonth)
    }
    return index
}

console.log('Deno.args=', Deno.args)
var index = month(Deno.args)
console.log(index)