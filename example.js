// --> Example 1- Here, It is referring the  current context which window global object

// let myNames = "Utkarsh";
// function myName(){
//     console.log(myNames);
// }
// myName();

// --> Example 2 -Here the current context is obj (Changed from window object to obj)

// const obj ={
//     myAge : 21,
//     myName(){
//         console.log(this);
//         console.log(this.myAge);
//     }

// }
// obj.myName();

// --> Example 3 - THIS object will not work with Fat Arrow function (cons)
const obj ={
    myAge : 21,
    myName:()=>{
        console.log(this);
    }
}
obj.myName();
