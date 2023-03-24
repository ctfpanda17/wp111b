function truthTable(n)
{
    let i=Math.pow(2,n)

    for(let a=0;a<i;a++)
    {
        console.log((a.toString(2)).padStart(n,0))
    }
}

truthTable(3)