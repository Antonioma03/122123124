narizx=0;
narizy=0;
distansia=0;
manoisquierda=0;
manoderecha=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(500,300);
    poseNet=ml5.poseNet(video,modelo);
    poseNet.on('pose',gotPoses);
}
function modelo(){
    console.log('posenet se a cargado');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        narizx=results[0].pose.nose.x;
        narizy=results[0].pose.nose.y;
    manoisquierda=results[0].pose.leftWrist.x;
    manoderecha=results[0].pose.rightWrist.x;
    distansia=floor(manoisquierda-manoderecha);
    
    } 
}

function draw(){
    background('#9ac569');
    fill('#2600ff');
    stroke('#297bd8');
    circle(narizx,narizy,distansia);
    document.getElementById("lado").innerHTML=distansia +"px";
}