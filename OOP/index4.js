//prototype vs instance members

//prototypical inheritance

function Circle(radius) {
    //instance members
    this.radius = radius;
}

//prototype members
Circle.prototype.draw = function () {
    console.log("draw");

}

const c1 = new Circle(1);
const c2 = new Circle(2);

//overwrite toString
Circle.prototype.toString = function () {
    return "circle with radius " + this.radius;
}