console.log("hello world!")
let x = 0
let y = 0
let z = 0

function setup () {
    createCanvas(windowWidth, windowHeight)
}


function draw () {
    // background(200)
    rectMode(CENTER)
    circle(mouseX, mouseY, 50)


    let size = 50
    let speed = 5
  //fill(random)
  
    circle(x, y, size);
    x = x + speed;
  if (x>width+size/2) {
    x=size/2;
    y=random(height)}
    fill(random(255), random(255), random(255));

    y = y + speed;
   if (y > height + size / 2) {
  y = random(height);
}
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
