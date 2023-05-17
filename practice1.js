//Find the square root of each element in an array?

// let arr = [9,25,36,49,64,81];
// let newsqr = arr.map((currElem)=> Math.sqrt(currElem));
// console.log(newsqr);

//Ques2 --> Multiply each element by 2 and return only those element which are greater than 10 and also add the value which are remain after filtering the value

// let arr =[2,3,4,5,6,7];
// let newArr = arr.map((currElem)=> currElem*2).filter((currElem)=> currElem>10).reduce((acc,currElem)=> acc+=currElem)

// console.log(newArr)

// --> How can we initialize the initial value of the array if we want 
//   let arr =[2,3,4,5,6,7];
//   let mul = arr.reduce((acc,currElem)=> {
//     debugger;
//     return acc *= currElem;
//   },9)

//   console.log(mul);

// HOW TO FATTEN AN ARRAY
//Converting 2d & 3d array into 1 dimensional array

// const arr =[
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]
// ]
// let flatArr = arr.reduce((acc,currVal)=> acc.concat(currVal))
// console.log(flatArr);
let arr =['ab','ca','tr'];
let newArr = arr.splice(0,0,'ac');
console.log(newArr);
console.log(arr);
