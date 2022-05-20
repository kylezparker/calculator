//let myArray=[1,2,10,true,"carlos"];

//console.log(myArray[3]);

//let oArray=["what is the meaning of life?",42,true];
//console.log(oArray[0]);
//console.log(oArray[1]);
//console.log(oArray[2]);
//console.log(oArray);

//array decl
const numbers=[10,20,30,40,50];
const months=["jan","feb","mar","apr","may"];

//methods for arrays, adds at end, adds at beginning
numbers.push(60,70,80);
numbers.unshift(-30,-20,-10,0);

//remove at end, at beginning
months.pop();
months.shift();
months.splice(1,1);

//display values
console.table(months);
console.table(numbers);

//access to values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//array dimension
console.log(numbers.length);