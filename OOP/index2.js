
//abstraction
//hide details
//private properties and methods
//with let they are not a property or method of the object
function Circle(radius) {
    this.radius = radius;

    //local variable
    let defailtLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {
        //...
    };
    this.draw = function () {

        computeOptimumLocation();
        console.log("draw");
    }
}

//closure in contrast to scope
//what vars will be accessible to an inner function
//local vars and vars defined in parent function
//scope is temp but closure stays