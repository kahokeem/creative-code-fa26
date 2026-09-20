function setup() {
    createCanvas(500, 500);
    background(150);
}

function draw() {

//원하는것. 중간 straight line으로부터 시작해서 landscape가 receding되는 느낌을 주고 싶은것. 여기서 생각할 점은 line function을 쓸 것이고, 이것을 어떻게 구현할것인가. So here's the plan
// let's set the premise to line (x1, y1, x2, y2). The gap which is the absolute difference between the each two x is different all the time, which means that I need to set these as variables. However, the gap between the two x values are always the same, which means that I can set this as a constant. and y1 is always 0 and y2 is always height. 
// Let's say here's two line values:line (x1, y1, x2, y2) and line (x3, y3, x4, y4)
//|x1-x3|, |x2-x4| this are different but they are constant. 


//시작 (i, 0, v, height) (i+gap1, 0, v+gap2, height))
//중간이(width/2, 0, width/2, height) 이고, 
//      (width/2-gap
let upperGap = 2;
let lowerGap = 20;


let pillarLine = line(width/2, 0, width/2, height);


//right

for (let i = width/2; i >= 0 ; i = i - 1){


  //right
//upperX 는 width/2 - uppercap
//lower x는 width/2 - lowerGap, 그다음에 width/2 - lowerGap*2
    let upperrightX = width/2 - (upperGap*i)
    let lowerrightX = width/2 - (lowerGap*i)
      
    line (upperrightX, 0, lowerrightX, height);
}
//left
for (let v = 0 ; v <= 200; v = v+1) {
  
    let upperleftX = width/2 + upperGap*v
    let lowerleftX = width/2 + lowerGap*v
  
    line (upperleftX, 0, lowerleftX, height)

}
  //v와 i, 즉 변수가 순번을 나타낼건지 좌표를 나타낼건지 잘생각하기. 그거에 따라서 looping 변수가 달라지고 식도 달라짐
}

