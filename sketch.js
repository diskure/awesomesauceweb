let img;

function preload() {
  img = loadImage("image/matt.3.jpg");
}
function setup() {
  createCanvas(800, 800);

  img.resize(width, height);

  noStroke();
}

function draw() {
  img.loadPixels();
  const pixelX = random(width);
  const pixelY = random(height);
  const pixelColor = img.get(pixelX, pixelY);

  // circles
  fill(pixelColor);
  ellipse(pixelX, pixelY, 20, 20);
}
