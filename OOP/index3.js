//getters and setters

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {

        computeOptimumLocation();
        console.log("draw");
    }

    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    //read-only property
    //define getters and setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        }, set: function (value) {
            defaultLocation = value;

        }
    });

}

const circle = new Circle(10);
