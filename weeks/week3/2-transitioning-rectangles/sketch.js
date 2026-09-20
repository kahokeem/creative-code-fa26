function setup() {
    createCanvas(400, 400);
  
   
}

function draw() {
  background(255)
let gridSize = 20
let initialHeight = 20
let canvasSize = 400
let rectWidth = canvasSize/gridSize
  
// (x+rectWidth, y (?), rectWidth, initialHeight + rectHeight)
 
  for(let i = 0; i < height; i = i + 1 ) {
    let rectHeight = i*initialHeight
    

    //should be reviewed 
    fill(map(i, 0, 19, 0, 255, true))
    
    rect (i*rectWidth-rectWidth, canvasSize - rectHeight , rectWidth,   initialHeight + rectHeight)
    


  }
}
   