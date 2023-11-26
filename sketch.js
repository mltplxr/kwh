let counter = 0;

function setup() {
  createCanvas(400, 200);
  background(255, 100); // Transparent background
  textAlign(CENTER, CENTER);
  textSize(32);
  textFont('monospace');
}

function draw() {
  background(255, 100);

  counter += 0.01; // You can adjust the increment value

  fill(0);
  text(counter.toFixed(2) + ' kWh', width / 2, height / 2);
}
