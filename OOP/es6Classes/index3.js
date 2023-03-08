const _radius = new WeakMap()

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }


    //getter
    getRadius() {
        return _radius.get(this);
    }

    //or define getter
    get radius() {
        return _radius.get(this);
    }

    //setter
    set radius(value) {
        _radius.set(this, value);
    }
}

const c = new Circle(1);