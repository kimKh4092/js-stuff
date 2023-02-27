
function Shape() {

}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function extend(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child;
}


function Circle() {
}

extend(Circle, Shape);

//method overriding
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}



const s = new Shape()
const c = new Circle();


