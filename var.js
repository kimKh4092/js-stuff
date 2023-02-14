// let vs var for declaring variables
// scope of var is its block but is its function (function scoped)
function start() {
    for (var i = 0; i < 5; i++)
        console.log(i);


    console.log(i);
}


start();

//in browsers we have a window object
// defininh var global attaches it to window object

var color = 'red';

//global functions are attaches to window object to