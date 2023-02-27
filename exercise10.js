const numbers = [2, 3, 1, 1];
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    let c = 0;
    for (let element of array) {
        if (element === searchElement) {
            c++;
        }
    }
    return c;
}

const numbers0 = [2, 3, 1, 1];
const count0 = countOccurrences0(numbers0, 1);
console.log(count0);

function countOccurrences0(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, occurence);
        return accumulator + occurence;

    }, 0)
}