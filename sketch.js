let counter = 0;

function setup() {
  createCanvas(60, 11);
  textAlign(CENTER, CENTER);
  textSize(10); 
  textFont('monospace');
}

function draw() {
  background(250, 0); 

  counter += 0.01;
  
  push(); // Save drawing state
  resetMatrix(); // Reset transform
  
  rect(0, 0, width, height); // Draw white rect over everything
  fill(0);
  text(counter.toFixed(2) + ' kWh', width/2, height/2);
  pop(); // Restore original state
}
