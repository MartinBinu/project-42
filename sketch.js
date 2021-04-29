var hr;
var min;
var sec;

var hrAngle;
var minAngle;
var secAngle;

function setup() {
  createCanvas(400,400);
  
  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr%12,0,12,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);
}

function draw() {
   background("black");  
   translate(200,200);

   push();
   rotate(hrAngle);
   angleMode(DEGREES);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   push();
   rotate(minAngle);
   angleMode(DEGREES);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   push();
   rotate(secAngle);
   angleMode(DEGREES);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();
}