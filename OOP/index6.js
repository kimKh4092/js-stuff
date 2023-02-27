//prototypical inheritance

//shapeBase
function Shape() {
}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


//circleBase
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape()
const c = new Circle(10);


