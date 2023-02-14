
//try and catch

const person = {
    fisrtName: 'mosh',
    lastName: 'hamedani',


    get fullName() {
        return `${person.fisrtName} ${person.lastName}`;

    },

    //value should be string
    //needs error handling

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('value is not valid');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('enter both first and last name')

        this.fisrtName = parts[0];
        this.lastName = parts[1];

    }
};

// error : const e = new Error()
// exception : throw e

//should catch the error that was thrown

try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}
console.log(person);
