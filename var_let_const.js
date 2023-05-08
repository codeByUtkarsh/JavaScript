//VAR -> The scope of the var will be in the function

// var myName = "Utkarsh";
// console.log(myName);

//myName= "Srivastava"
// console.log(myName);

//Output
// Utkarsh
// Srivastava

// LET -> It has only  Block Scope
// let myName = "Utkarsh";
// console.log(myName);

// myName= "Srivastava"
// console.log(myName);

//Output
// Utkarsh
// Srivastava


// CONST -> It has only  Block Scope and we can't change the const variable
// let myName = "Utkarsh";
// console.log(myName);

// myName= "Srivastava"
// console.log(myName);

// function biodata(){
//     var myFirstName ='utkarsh';
//     console.log(myFirstName)
//     if(true){
//         var myLastName ='Srivastava'
//         console.log("outer"+myFirstName);
//         console.log("inner"+myLastName);
//     }
//     console.log("innerouter"+ myLastName);
// }
// biodata();

//output
// utkarsh
// outerutkarsh
// innerSrivastava
// innerouterSrivastava

// function biodata(){
//     let myFirstName ='utkarsh';
//     console.log(myFirstName)
//     if(true){
//         let myLastName ='Srivastava'
//         console.log("outer"+myFirstName);
//         console.log("inner"+myLastName);
//     }
//     console.log("innerouter"+ myLastName);
// }
// biodata();

// Gives runtime error

function biodata(){
    const myFirstName ='utkarsh';
    console.log(myFirstName)
    if(true){
        const myLastName ='Srivastava'
        console.log("outer"+myFirstName);
        console.log("inner"+myLastName);
    }
    console.log("innerouter"+ myLastName);
}
biodata();

//give run time error
