const numbers = [1, 2, 3, 4];
try {
    const output = move(numbers, 3, 0);
    console.log(output);

}
catch (e) {
    console.log(e)
}


function move(array, index, offset) {
    let number = array[index];

    if (offset + index >= array.length || offset + index < 0) {
        throw new Error("invalid offset")
    }


    if (index === 0) {
        array.splice(0, 1);
    }
    else {
        array.splice(index, index);
    }
    array.splice(offset + index, 0, number);
    return array


}







// numbers.splice(0, 0);
// // numbers.splice(0, 0, 4);
// console.log(numbers)