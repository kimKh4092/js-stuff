//changing thid

//fisrt approach
const video1 = {
    title: 'a',
    tags: ['1', '2', '3'],
    play() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        })
    }
};

video1.play();


//second approach
const video2 = {
    title: 'a',
    tags: ['1', '2', '3'],
    play() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this))
    }
};

video2.play();

//call,apply,bind for changing the value of this for a function
//bind returns a function and changes the value of this premanantly
function playVideo() {
    console.log(this);
}

playVideo.call({ name: 'kim' });

//third approach 
//arrow functions : they inherit this value
const video3 = {
    title: 'a',
    tags: ['1', '2', '3'],
    play() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        })
    }
};

video3.play();
