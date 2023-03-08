//private members
//a primitive type in es6 = symbol


const _radius = Symbol()
const _draw = Symbol();
//symbol is a unique indetifier
//everytime calling symbol function we get a unique value
//use unique value as property name for object

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    //private method
    [_draw]() {

    }

}

const c = new Circle(1);


//weakmaps --> a dictionary where keys are objects and values can be anything
//keys are weak
const _radius0 = new WeakMap();
const _move0 = new WeakMap();

class Circle0 {
    constructor(radius) {
        _radius0.set(this, radius);//(key, value)

        //private method
        _move0.set(this, function () {
            console.log('move', this)
        })
    }


    //access weakmap
    //public method
    draw() {
        console.log(_radius0.get(this));
        _move0.get(this)();
        console.log('draw');


    }
}


const c0 = new Circle0(1);
