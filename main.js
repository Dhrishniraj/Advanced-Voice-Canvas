var x = 0;
var y = 0;

var n = 0;
drawApple = "";

function preload(){
    var apple = loadImg("https://i.postimg.cc/52X7bbyt/istockphoto-185262648-170667a-removebg-preview.png");
}

baburao = window.webkitSpeechRecognition;
var recognition = new baburao();

function start(){
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content2 = event.results[0][0].transcript;
    content1 = Number(content2);
    x = Math.floor(Math.random() * (screen.width-50));
    y = Math.floor(Math.random() * (540-50));
    if(Number.isInteger(content1)){
        drawApple = "set";
    }
    else{
        window.alert("Please speak a valid number.");
    }
}

function setup(){
    canvas = createCanvas(screen.width, 540);
}
function draw(){
    if(drawApple == "set"){
        for(i=0; i<=content1; i++){
            x = Math.floor(Math.random() * (screen.width-50));
            y = Math.floor(Math.random() * (540-50));
            image(apple, x, y, 50, 50);
        }
        drawApple = "";
        document.getElementById("status").innerHTML = content1 + " apples drawn";
    }
}