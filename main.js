leftwristx=0;
rightwristx=0;
difference=0;
function preload(){

}
function setup(){
Canvas = createCanvas(400,400);
Canvas.position(540,150);
video = createCapture(VIDEO);
video.size(400,400);
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is ready!");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        leftwristx = result[0].pose.leftWrist.x;
        rightwristx = result[0].pose.rightWrist.x;
        difference = floor(leftwristx-rightwristx);
       document.getElementById("hfj").innerHTML="the size of the font is " + difference + " px ";
    }
}
function draw(){
    background("black");
    textSize(difference);
    fill(238, 193, 255);
    text("Tanya",40,150);
    
}