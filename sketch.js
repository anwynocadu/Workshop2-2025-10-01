let bg;
let record;
let energy = 0; // energy level (0–100)
let velocity = 30;
let rotationspeed = 0.0;
let recordangle = 0; 

function preload() {
  bg = loadImage('digitizerUIconcept1.png');
  record = loadImage('recordbutton_.png');
}

function setup() {
  createCanvas(1020, 1705);
  

}

function draw() {

  rotationspeed = map(velocity, 0, 100, 0, 100) / 1000;

  background(bg);
  push();
  translate(254, 1470);
  push ();
  rotate(recordangle);
  console.log(rotationspeed);
  imageMode(CENTER); 
  recordbut = image(record, 0, 0, 440, 440);
  pop ();
  pop();


  recordangle = recordangle + rotationspeed;
  // Fade energy over time
  energy -= 0.05;              // decrease a little each frame
  energy = constrain(energy, 0, 100); // keep within bounds

  // Draw energy bar
  drawEnergyBar(570, 90, 300, 40); // x, y, width, height
}

// Function to draw the energy bar
function drawEnergyBar(x, y, w, h) {
  // Map energy to color
  let barColor;
  if (energy < 33) {
    barColor = color(255, 0, 0); // red
  } else if (energy < 66) {
    barColor = color(255, 255, 0); // yellow
  } else {
    barColor = color(0, 200, 0); // green
  }

  // Outline
  stroke(255); // white outline
  strokeWeight(7);
  noFill();
  rect(x, y, w, h);

  // Fill bar
  noStroke();
  fill(barColor);
  let filledWidth = map(energy, 0, 100, 0, w);
  rect(x, y, filledWidth, h);

  console.log(recordangle);

}

// Example interaction: tap/click increases energy
function mousePressed() {
  if (mouseX > 254 && mouseX <  700 &&
      mouseY >  1470 && mouseY <  1910) {
    funny(); // call your function
  }

  energy += 10;
  energy = constrain(energy, 0, 100);
}

function funny()
{
  console.log("funny function called");
}