
function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

//intermediate function inheritance
function extend(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child;
}


function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('draw');
}



function Square(size) {
    this.size = size;
}
extend(Square, Shape);

const s = new Shape()
const c = new Circle(10, 'red');
const sq = new Square(10);


