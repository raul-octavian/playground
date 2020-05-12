//?global variables

var coordX;
var coordY;
var one;
var allPositions = [];
var canvas = document.querySelector("#canvas");
var positionCanvas = canvas.getBoundingClientRect();
var elementWidth = canvas.offsetWidth;
var elementHeight = canvas.offsetHeight;
var clickPosition = document.querySelector("#click-show");


//? oject constructor
function Position(x, y) {
    this.date = new Date();
    this.x = x;
    this.y = y;

}
//?populate the array
function addPosition(one) {
    allPositions.push(one);
}
// ?get the click location
//! store the click location

function showCoords(event) {
    coordX = event.clientX - positionCanvas.left;
    coordY = event.clientY - positionCanvas.top;
    one = new Position(coordX, coordY);
    addPosition(one);
    clickPosition.style.left = coordX + "px";
    clickPosition.style.top = coordY + "px";
    if (allPositions.length > 1) {
        checkValues();
    }

    console.log(coordX);
    console.log(coordY);
    console.log(one);
    console.log(allPositions);
};
console.log(positionCanvas);



// ckeck the arrays results and fluctruations

function checkValues() {
    if ((allPositions[allPositions.length - 2].x - allPositions[allPositions.length - 1].x) > 150) {
        alert("How are you feeling today?");
    }
    ;
}













