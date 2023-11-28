let counter = 0;

function setup() {
  createCanvas(60, 11);

  textAlign(CENTER, CENTER);
  textSize(10); 
  textFont('monospace');
}

function draw() {
  
  background(255, 100); 
  
  let randAmount = random(0.0001);
  
  if (random(1) < 0.5) { 
    counter += randAmount;
  } else {   
    counter -= randAmount;
  }

  counter = constrain(counter, 0, 10); 
  

  text(counter.toFixed(3) + ' kWh', width/2, height/2);

}
