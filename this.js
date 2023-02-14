// this keyword : the object that is executing the current function

// in a method , this references to object
// in a global object, this references to the window object

//callback functions are reqular functions too

const video = {
    title: 'a',
    tags: ['1', '2', '3'],
    play() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this)
        console.log(this);
    }
};

video.play();

function playVideo() {
    console.log(this);
};

playVideo();
