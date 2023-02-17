checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log("Ok");
    }
    else {
        extraSpeed = speed - speedLimit;
        const points = Math.floor(extraSpeed / kmPerPoint);
        if (points >= 12) {
            console.log("license suspended")

        }
        else {
            console.log("points :" + points)

        }




    }



}