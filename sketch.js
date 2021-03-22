var hr = hour();

var mm = minute();
var sc = second();

var scAngle = map(sc,0,60,0,360);


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  
  //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw() {
  background(255,255,255);  
  
   //Translation and rotation 
    translate(200,200)
    rotate(-90)
  
  push();
  rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
  drawSprites();
}
