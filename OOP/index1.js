//object literal syntax
//not a good way if object has methods 
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw")
    }
};

circle.draw();


//factory function
function creatCircle(radius,) {
    return {
        radius,
        draw: function () {
            console.log("draw")
        }
    }

}

const circle2 = creatCircle(1);
circle2.draw();


//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }

}

const circle3 = new Circle(1);
circle3.draw();

//constructor property

//add property
circle2.location1 = { x: 1 };
circle2["location2"] = { x: 2 };
console.log(circle2)

//remove property
delete circle2["location2"];

//iterating over object

for (let key in circle2) {
    console.log(key)
}

