function setup() {
    createCanvas(1400, 600);
    background(20, 20, 20);
}

function draw() {
    let gridSize = 7;
    let circleSize = width/gridSize;

    for (let i=0; i<7; i = i+1){
        circle(i * circleSize + circleSize/2, height/2, circleSize/2)
    }

}