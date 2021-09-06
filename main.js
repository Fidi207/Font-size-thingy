nosx = 0;
nosy = 0;
diff = 0;
left_x = 0;
right_x = 0;
taxt = "Text";

function changetxt(){
    taxt = document.getElementById("text_typein").value;
}

function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(30, 110);
    wabcem = createCapture(VIDEO);
    wabcem.size(400, 400);
    wabcem.center();
    posnt = ml5.poseNet(wabcem, loded);
    posnt.on('pose', reslt);
}

function draw(){
    background("#69edff");
    fill("#ff2432");
    stroke("#ff2432");
    textSize(diff);
    text(taxt, 100, 100);
}

function loded(){
    console.log("I dont even have anything to say now.");
}

function reslt(arry){
    if (arry.length > 0){
        console.log(arry);
        nosx = arry[0].pose.nose.x;
        nosy = arry[0].pose.nose.y;

        left_x = arry[0].pose.leftWrist.x;
        right_x = arry[0].pose.rightWrist.x;

        diff = floor(left_x - right_x);
        document.getElementById("taxt_size").innerHTML= diff;
    }
}