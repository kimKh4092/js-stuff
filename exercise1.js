shownumbers(5);

function shownumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i, "even")
        }
        else {
            console.log(i, "odd")
        }
    }

}