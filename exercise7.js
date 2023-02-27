const numbers = arrayFromRange(-10, -5);

console.log(numbers);

function arrayFromRange(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    return numbers;

}

const numbs = [1, 2, 3];
console.log(includes(numbs, 9));

function includes(array, searchElement) {
    for (let item of array) {
        if (item === searchElement) {
            return true
        }

    }
    return false
}
