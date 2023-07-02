// Asynchronous JavaScript Program
// It allows the program to be executed immediately
//Functions running in parallel with other functions

const fun2 =()=>{
    setTimeout(()=>{
        console.log(`Function 2 is called`);
    },3000);
}
const fun1 =()=>{
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is callled again`);
}
fun1()