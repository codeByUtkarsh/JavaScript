//Default Parameters --> It allows named parameters to be iniitialized with default values if no value or undefined is assigned

function mul(a,b=3){
    return a*b;
}
console.log(mul(5));