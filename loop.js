//Array
var  myArr = ['Rahul','john','wick','Uthred'];


//Normal for loop
// for(var i=0;i<myArr.length;i++){
//     console.log(myArr[i]);
// }


// --> FOR IN LOOP(helps to get the index of the elements)
// for(let elements in myArr){
//     console.log(elements);
// }


// -->FOR OF LOOP (helps to get the elements of the arrays)
// for(let elements of myArr){
//     console.log(elements);
// }

// -->forEach loop (It's the combination of both for in and for of , it gives both the index no and elements of the array , It can also gives the data of the array)

let newArr = myArr.forEach(function(element,index,array){
    return `The index no is ${index} of element ${element}`
});
console.log(newArr);
