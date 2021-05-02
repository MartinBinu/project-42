var hr;
var min;
var sec;

var hrAngle;
var minAngle;
var secAngle;

var dark;

var hrline;
var minline;
var secline;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");  
   translate(200,200);
   angleMode(DEGREES);

   hr = hour();
   min = minute();
   sec = second();

   hrAngle = map(hr%12 - 3,0,12,0,360);
   minAngle = map(min - 15,0,60,0,360);
   secAngle = map(sec - 15,0,60,0,360);

   push();
   rotate(hrAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,90,0);
   pop();

   push();
   rotate(minAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,110,0);
   pop();

   push();
   rotate(secAngle);
   stroke(0,0,205);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   fill("black");
   dark = ellipse(1,10,100,100);

   textSize(20);
   fill("red");
   text(hr%12 + ":",-35,19)
   fill(0,255,0);
   text(min + ":",-20,19);
   fill("blue");
   text(sec,7,19)

   noFill();
   arc(-20,19,200,200,0 - 90,hrAngle);
   arc(-20,19,300,300,0 - 90,minAngle);
   arc(-20,19,200,200,0 - 90,secAngle);
}