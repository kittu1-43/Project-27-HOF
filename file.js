// Function #1: Array Slice
/*
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood=[];
modifiedFood=foods.slice(1,4)
console.log(modifiedFood)

*/
// Function #2: Array Splice

/*
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood=[];
foods.splice(2,0,"noodles","icecream")
modifiedFood=foods;
console.log(modifiedFood)

*/


// Function #3: Filter

/*
const numberArray = [12,324,213,4,2,3,45,4234];

const evenNumbers=numberArray.filter(isEven)

function isEven(numberArray){
    return numberArray%2==0;
}
console.log(evenNumbers)
*/

// Function #4: Reject


var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);





// Function #5: Map

/*
const myArray = [11, 34, 20, 5, 53, 16];

let squareOFArray=[];
squareOFArray=myArray.map(findSquareOfNumber)

function findSquareOfNumber(myArray)
{
return myArray*myArray;
}
console.log(squareOFArray)
*/

                               
// Function #6: Reduce

/*

const myArray= [2, 3, 5, 10];
let newArray =[];
newArray=myArray.map(Number).reduce(function(product,value)
{
    return product*value;
})
console.log(newArray);

*/


