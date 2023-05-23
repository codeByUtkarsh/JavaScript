//How to Create object in JavaScript
// OBJECT LIERALS --> It is used to store variables and functions together in one container

let bioData = {

    //--> First way to create object
    myName: "Utkarsh",
    myAge : 21,
    // getData : ()=>{
    //     console.log(`My name is  ${bioData.myName} and my age is ${bioData.myAge}`);
    // },

    //--> Second way to create object(NO NEED TO WRITE FUNCTION AS WELL AFTER ES6)
    
    // getData(){
    //     console.log(`My name is  ${bioData.myName} and my age is ${bioData.myAge}`);
    // },

    //--> Third way -- What if we want object as a value inside an object(OBJECT INSIDE ANOTHER OBJECT)
    fullName : {
        firstName : "Utkarsh",
        lastName : "Srivastava"
    }
}

console.log(bioData.fullName.firstName);

// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();