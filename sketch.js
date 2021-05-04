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
   rotate(-90)
   angleMode(DEGREES);

   hr = hour();
   min = minute();
   sec = second();

   hrAngle = map(hr%12,0,12,0,360);
   minAngle = map(min,0,60,0,360);
   secAngle = map(sec,0,60,0,360);

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

   rotate(90);
   textSize(20);
   fill("red");
   text(hr%12 + ":",-34,10)
   fill(0,255,0);
   text(min + ":",-9,10);
   fill("blue");
   text(sec,28,10)

   rotate(-90);
   noFill();
   stroke("red");
   strokeWeight(10)
   arc(0,0,300,300,0,hrAngle);
   stroke(0,255,0);
   arc(0,0,325,325,0,minAngle);
   stroke("blue");
   arc(0,0,350,350,0,secAngle);
}