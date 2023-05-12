//--> SPLICE METHOD - Used to Adds and/or remove elements from and array
 const months = ['jan','march','April','june','july'];
// const newMonths = months.splice(months.length,0,'Dec');
// console.log(months);

//splice method returns deleted element from the array

// --> update march to March?

const indexOfMonth = months.indexOf("march");
if(indexOfMonth != -1){   //checking month is present or not
    const newMonths = months.splice(indexOfMonth,1,"March");
    console.log(months);
}
else{
    console.log('No such element present in the array')
}
