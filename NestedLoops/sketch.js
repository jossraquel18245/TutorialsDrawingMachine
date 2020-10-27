let noiseOffset = 0.0;
let strokeWidth = 5;
let array = [];

function setup() {
  createCanvas(600, 600);
  //background(255, 134, 20);


  drawGrid();
  noFill();
}

function draw() {

  background(255, 134, 20, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;


  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped() {

  //console.log(`key ${key} is being typed`)

  if (key === 's') {
    // Save this image
    saveCanvas(`fileName`, 'png');
  } else if (key === 'c') {
    //clear the image
    clear();


  }

  return false;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  //noStroke();
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255) {
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(strokeWidth);
}
