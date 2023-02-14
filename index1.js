//01
//constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


//factory function
function makeAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }

}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);

}

// const address0 = new Address('baghshah', 'shz', 613);
// const address1 = makeAddress('hedayat', 'shz', 714)
// showAddress(address0);
// showAddress(address1)


//02
let address0 = new Address('A', 'B', 'C');
let address1 = new Address('A', 'B', 'C');

function areEqual(address0, address1) {
    let count = 0;
    let lenght = 0;
    for (let key in address0) {
        lenght++;
        if (address0[key] === address1[key])
            count++;
    }
    if (count === lenght)
        return true

    return false
}


function areSame(address0, address1) {
    return address0 === address1
}

console.log(areSame(address0, address1));
console.log(areEqual(address0, address1));

