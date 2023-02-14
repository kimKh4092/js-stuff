//rest operator
function sum(...args) {
    console.log(args);
    return args.reduce((a, b) => a + b);

}

console.log(sum(1, 2, 3));



//default parameteres
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(1000));




//getters & setters
//getters => access properties in an object
//setters => change or mutate them
const person = {
    fisrtName: 'mosh',
    lastName: 'hamedani',

    //a getter method
    //get the persons fullname like a property
    get fullName() {
        return `${person.fisrtName} ${person.lastName}`;

    },

    // a setter method
    set fullName(value) {
        const parts = value.split(' ');
        this.fisrtName = parts[0];
        this.lastName = parts[1];

    }
};



person.fullName = 'john smith';
console.log(person);

