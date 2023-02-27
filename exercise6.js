
console.log(sum(1, 2, 4))

function sum(...numbers) {
    if (Array.isArray(numbers[0])) {
        return numbers[0].reduce((a, b) => a + b)
    }

    return numbers.reduce((a, b) => a + b);

}



const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

//read-only property with getter method