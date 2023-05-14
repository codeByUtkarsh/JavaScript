// --> Array.prototype.find()

// Returns the found element in the array or undefined if not found
//Only problem is that it return only one element

// example using fat arrow function 

const prices = [200,300,350,400,500,600];
console.log(prices.find((currVal)=> currVal<400));
