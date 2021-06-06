var canvas2=document.getElementById("canvas10");
var twod_drawing=canvas2.getContext("2d");
var car1_width=150;
var car1_height=100;
var car1x=100;
var car1y=75;
var car1_img="https://i.postimg.cc/YqdnnNX1/car1.png";
var car1_drawing;
var car2_width=150;
var car2_height=100;
var car2x=100;
var car2y=300;
var car2_img="https://i.postimg.cc/YqdnnNX1/car1.png";
var car2_drawing;
var background_img="https://image.shutterstock.com/image-vector/race-track-start-finish-line-260nw-1444312355.jpg";
var background_drawing;

function add(){
    background_drawing=new Image();
    background_drawing.onload=upload;
    background_drawing.src=background_img;
    car1_drawing=new Image();
    car1_drawing.onload=uploadcar1;
    car1_drawing.src=car1_img;
    car2_drawing=new Image();
    car2_drawing.onload=uploadcar2;
    car2_drawing.src=car2_img;
}
function upload(){
    twod_drawing.drawImage(background_drawing,0,0, canvas2.width, canvas2.height)
}
function uploadcar1(){
    twod_drawing.drawImage(car1_drawing,car1x,car1y,car1_width,car1_height)
}
function uploadcar2(){
    twod_drawing.drawImage(car2_drawing,car2x,car2y,car2_width,car2_height)
}
window.addEventListener("keydown",move);
function move(e){
    var code=e.keyCode;
    console.log(code);
    if(code=="40"){
        console.log("down is pressed");
        down();
    }
    if(code=="37"){
        console.log("left is pressed")
        left()
    }
    if(code=="39"){
        console.log("right is pressed")
        right();
    }
    if(code=="38"){
        console.log("up is pressed")
        up();
    }
}
