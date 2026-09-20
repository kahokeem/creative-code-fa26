function setup() {
    createCanvas(400, 400);
    background(220);

}

function draw () {
  
//vertical lines
    //x1 constantly 0
    //y1 gap*i
    //x2 gap*1 gap*1....gap*7
    //y2 constantly height

    let gridSize = 8;
    let gap = width / gridSize;



    for (let i = 0; i <= 8; i = i + 1){
          
          line(1, gap*i-1, 1+gap*i, height-1)
          strokeWeight (3)
    }

}   