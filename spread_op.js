// --> Spread Operator - (...) allows us to quickly copy all or part of an existing array or object into another array or object

const number1 = [1,2,3];
const number2 =[4,5,6];

const numbersCombined =[...number1,...number2,7,8];
console.log(numbersCombined);
