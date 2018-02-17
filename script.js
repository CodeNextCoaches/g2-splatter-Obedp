var canvas;
var canvasWidth=500;
var canvasHeight=400;
var button;
var slider;
var spread;

function setup(){
  canvas=createCanvas(canvasWidth,canvasHeight);
  canvas.parent("canvas-area");
  canvas.mousePressed(drawSplatter);
  background(104,104,245);
  button=select("#clear-button");
  button.mousePressed(setup);
  slider=select("#slider");
  slider.input(updateSpread);
  updateSpread();
}

function draw(){
  
}


function drawSplatter(){
  var circleAmnt=random(10,15);
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  for(i=0; i<circleAmnt;i++){
    var ranRadius=random(5,15);
    ellipse(random(mouseX-spread,mouseX+spread),random(mouseY-spread,mouseY+spread),ranRadius,ranRadius);
  }
}

function updateSpread(){
  spread=slider.value(); 
}