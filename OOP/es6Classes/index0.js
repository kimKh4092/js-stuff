// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log("draw");
//     }
// }


class Circle {
    constructor(radius) {
        this.radius = radius;
        //method on the object instance
        this.move = function () { }
    }

    //defining methods
    //method is on the prototype of the object
    darw() {
        console.log('draw');

    }
}

const c = new Circle(1);

//function declarations are hoisted (raised to top)

//class declarations are not hoisted