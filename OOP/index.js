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
    this.render = function () {
        return `<select>
        <option>1<option>`

    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src="${this.src}"/>`

    }

}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')

]

for (let element of elements) {
    console.log(element.render())
}