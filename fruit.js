var cocossd = "";
var img1 = "";
function preload(){
img1 = loadImage("image1.jpg");
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("h3").innerHTML = "status : detecting objects";
}
function modelLoaded(){
    console.log("cocossd intitialized");
    status = true;
    objectDetector.detect(img1,gotResult);
}
function gotResult(error,results){
    
}
function draw(){

}