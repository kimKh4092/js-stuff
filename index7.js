//reducing arrays
const numbers = [1, 2, 3, 4];

//adding elements of array
const sum = numbers.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue;
}, 0);//0 is initial value for accumulator
//accumulator like sum=0 and currentvalue like each number
console.log(sum);