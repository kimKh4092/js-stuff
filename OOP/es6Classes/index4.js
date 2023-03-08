class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }

}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    draw() {
        console.log('draw');

    }
    move() {
        super.move();
        console.log('move circle');
    }
}

const c = new Circle('red', 1);