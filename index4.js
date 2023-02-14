//removing elements
const numbers = [1, 2, 3, 4];

const last = numbers.pop();
console.log(last);

const first = numbers.shift();

numbers.splice(1, 1);
console.log(numbers);

//emptying array
let numbs = [1, 2, 3, 4];
let another = numbers;

//numbs=[];
//numbers.length=0;
//numbers.splice(0, numbers.length);

console.log(numbers);
console.log(another);


//combining and slicing arrays
const fisrt0 = [1, 2, 3];
const second0 = [4, 5, 6];

const combined = fisrt0.concat(second0);
console.log(combined);

const sliced = combined.slice(2, 4);
console.log(sliced);

//spread operator
const combied0 = [...fisrt0, ...second0, 7];
console.log(combied0);

const copy = [...combied0];

//iterating an array
const numbs0 = [1, 2, 3];
for (let number of numbs0) {
    console.log(number);
}

//or
//function will be executed for each element in array
numbs0.forEach(function (number) {
    console.log(number);
})