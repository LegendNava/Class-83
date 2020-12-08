var lastPotionOfX, lastPotionOfY;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var WidthOfTheLine = 2;
var Width1 = screen.width;
var newWidth = Width1 - 70;
var newHeight = screen.height - 300;

if(width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart")
    lastPotionOfX = e.touches[0].clientX -  canvas.offsetLeft;
    lastPotionOfY = e.touches[0].clientY -  canvas.offsetTop;
    color = document.getElementById("color").value;
    WidthOfTheLine = document.getElementById("width").value;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("my_touchmove");
    var currentPostitionOfMouseX = e.touches[0].clientX - canvas.offsetLeft;
    var currentPostitionOfMouseY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = WidthOfTheLine;
        console.log("Last Position Of X and Y Coordinates")
        console.log("x = "+ lastPotionOfX)
        console.log("y = "+ lastPotionOfY)
        ctx.moveTo(lastPotionOfX,lastPotionOfY);

        console.log("Current Postiion of X Coordinate is = "+currentPostitionOfMouseX+"Current Position Of Y is = "+currentPostitionOfMouseY);
        ctx.lineTo(currentPostitionOfMouseX,currentPostitionOfMouseY);
        ctx.stroke();
    lastPotionOfX = currentPostitionOfMouseX;
    lastPotionOfY = currentPostitionOfMouseY;
}
function clear1() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log("CLEARED")
}

