function preload() {
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = creatCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = m15.poseNet(video, modelLoaded);
}

function modelLoaded() {
console.log('PoseNet has started')
poseNet.on('pose', gotPoses);
}



function draw() {
image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save("myFilterImage.png");
}

function gotPoses(results) 
{
if(results.length > 0);
{
console.log(results);
console.log("mouth x =" + results[0].pose.nose.x);
console.log("mouth y =" + results[0].pose.nose.y);

}


}

