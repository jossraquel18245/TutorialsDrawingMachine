let noiseOffset = 0.0;
let strokeWidth = 5;
let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 134, 20);


  noFill();
}

function draw() {

background(255, 134, 20, 5);
strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 100;


if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  array.push([mouseX, mouseY]);

  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY );
  line(mouseX, mouseY, pmouseX, pmouseY );
}

}

function keyTyped(){

  //console.log(`key ${key} is being typed`)

  if (key === 's'){
    // Save this image
    saveCanvas(`fileName`, 'png');
  } else if (key === 'c'){
    //clear the image
    clear();


  }

  return false;
}
