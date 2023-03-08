'use strict'
//enable strict mode

//body of classes by default is executed in strict mode

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //instance method
    darw() {
        console.log('draw');

    }
    //static method
    //accessible on the object class
    //create utility functions
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);

    }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle);


