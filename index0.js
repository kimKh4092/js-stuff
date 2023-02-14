const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,

    draw: function () {
        console.log('draw')
    }
};

//circle.draw();


//factory function (camel notation: oneTwoThree)
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw;

//constructor function (pascal notation: OneTwoThree)
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

const circle0 = new Circle(1);
console.log(circle0)