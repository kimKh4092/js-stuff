function HtmlElement() {
    this.click = function () {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}


function HtmlSelectElement(array) {
    if (array) {
        this.items = array;
    }
    else {
        this.items = Array(0);
    }

    this.addItem = function (newItem) {
        this.items.push(newItem);

    }

    this.removeItem = function (removed) {
        const index = this.items.indexOf(removed);
        this.items.splice(index, index);


    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


const e = new HtmlElement()
const s = new HtmlSelectElement();

