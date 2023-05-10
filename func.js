function fact(N){
    var fac=1;
    for(var i=1;i<=N;i++){
        fac=fac*i;
    }
    console.log(fac);
}
console.log(fact(6));