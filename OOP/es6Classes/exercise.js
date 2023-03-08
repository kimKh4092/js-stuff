
const _count = new WeakMap();
const _items = new WeakMap();

class Stack {
    constructor() {
        _count.set(this, 0);
        _items.set(this, [])

    }

    get count() {
        return _count.get(this);
    };

    get items() {
        return _items.get(this);
    }

    peek() {
        let items = _items.get(this);
        const last = items.pop();
        items.push(last);
        return last;



    }
    pop() {
        let items = _items.get(this);
        const count = _count.get(this);
        if (count == !0) {
            _count.set(this, count - 1);
            return items.pop();
        }
        else {
            throw new Error('stack is empty')

        }


    }
    push(item) {
        let items = _items.get(this);
        _items.set(this, [...items, item]);
        const count = _count.get(this);
        _count.set(this, count + 1);

    }
}


const stack = new Stack()