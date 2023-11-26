let counter = 0;

function setup() {
  createCanvas(60, 11);
  textAlign(CENTER, CENTER);
  textSize(10);
  textFont('monospace');
} 

function draw() {
  background(250); 
  counter += 0.01; 
  
  fill(0);
  text(counter.toFixed(2) + ' kWh', width/2, height/2);
}
