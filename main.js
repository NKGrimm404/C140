video="";
function preload(){
}
function setup() {
	canvas=createCanvas(600,450);
	canvas.parent('canvas');
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
}

function modelLoaded(){
console.log("Model is Loaded")
}

function draw() {
    image(video,0,0,600,450);
}