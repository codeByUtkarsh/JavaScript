//Destructuring make it possible to unpack value from arrays or properties from objects , into distinct variables

// ARRAY DESTRUCTURING

const BioData = ['Utkarsh','Srivastava',21];

//without using Array Destructuring
// let myFName = BioData[0];
// let mylName = BioData[1];
// let myAge = BioData[2];
// console.log(myFName);

//Using Array Destructuring]
//We can also add Values too
let[myFName,mylName,myAge,myDegree='B.Tech'] = BioData;
console.log(myFName);
console.log(myDegree);

//Difference []  <--> {}


const myBioData = {
    myFname :'Utkarsh',
    myLname : 'Srivastava',
    myage : 21
}

//without using Object Destructuring
// let myFname = myBioData.myFname;
// let mylname = myBioData.myLname;
// let myage = myBioData.myage;


//Using Object Destructuring 
//We can also add Values too

let {myFname,myLname,myage,mydegree='B.tech'} = myBioData;
console.log(mydegree);