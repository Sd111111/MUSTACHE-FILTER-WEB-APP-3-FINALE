noseX=0;
noseY=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/s212CCZ0/2-22005-men-clipart-mustache-mustache-and-glasses-clipart-hd-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose" , gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
    
      console.log("Nose X =  " + noseX);
      console.log("Nose Y =  " + noseY);

    }
}

function modelloaded(){
    console.log("poseNet is initialized");
}
function draw(){
    image(video,0,0, 300,300);
    image(mustache,noseX-70,noseY-110,150,200);
}

function take_snapshot(){
    save("moustachioed.png");
}