let v = function fatorial(n){
    let fat = 1
    for(let c = n; c >1; c --){
        fat +=c
    }
    return fat
}
console.log(v(120))