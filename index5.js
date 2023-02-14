//joining arrays
const numbers = [1, 2, 3];
const joined = numbers.join(','); //returns string
console.log(joined);

const message = 'this is first';
const parts = message.split(' '); //returns an array
console.log(parts);

//sorting arrays
const numbers1 = [3, 1, 2];
numbers.sort();
numbers.reverse();


const courses = [
    { id: 1, name: 'js' },
    { id: 1, name: 'css' },
    { id: 3, name: 'Js' }
];
courses.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;

})
//use tolowercase or touppercase

console.log(courses);

//every and some 
// number.every(callback function)
//some --->at least on element

//filter arrays
const numbers2 = [1, -1, 3];
const filtered = numbers2.filter(function (value) {
    return value >= 0;
});
console.log(filtered);




