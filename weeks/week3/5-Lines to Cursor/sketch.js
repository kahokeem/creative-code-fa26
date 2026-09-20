function setup() {
    createCanvas(400, 400);
    background(220);
    
}

function draw() {

for (let i = 0; i<= 10; i = i+1){

    let gap = 20;
    let upperX = mouseX-40+ gap*i
    line(mouseX, mouseY, upperX, mouseY-50);
    }
background(220, 140);

}