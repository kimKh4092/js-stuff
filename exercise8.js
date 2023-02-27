const numbers = [1, 2, 4, 3];
const output = except(numbers, [1, 0, 2]);

console.log(output);


function except(array, excluded) {
    let output = [];
    for (let item of array) {
        if (!excluded.includes(item)) {
            output.push(item);

        }
    }
    return output

}

