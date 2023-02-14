//arrays
const numbs = [2, 3];

//add elements
//end
numbs.push(5);

//begining
numbs.unshift(1);

//middle
numbs.splice(3, 0, 4);

console.log(numbs);

//find elements
//primitives
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));
console.log(numbers.lastIndexOf(1));

//check existence
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

//finding objects
const course = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const found = course.find(function (course) {
    return course.name === 'a';
});
console.log(found);

const found1 = course.findIndex(function (course) { //callback function
    return course.name === 'a';
});
console.log(found1);


//arrow function
const found3 = course.find((course) => {
    return course.name === 'a';
});




