//mapping arrays
//map each item in array to sth else

const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);
console.log(numbers);

//map to strings
const items1 = filtered.map(n => '<li>' + n + '</li>')
const html = '<ul>' + items1.join('') + '</ul>';
console.log(items1);
console.log(html);

//map to objects
const items2 = filtered.map(n => {
    const obj = { value: n }
    return obj;
});

console.log(items2);

//chainable methods
//numbers.filter().map()

