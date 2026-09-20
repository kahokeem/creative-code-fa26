function setup() {
    createCanvas(400, 400);
    background(220);
}


//if 쓰기? lerp?
function draw (){

    background(255)
    let gridSize = 8
    let rectSize = width/8

    //white

    for (let i = 0; i < 8; i = i + 1){
        for(let v = 0; v < 8; v = v+1) {
          if (i % 2 === 0 && v % 2 === 1){
            fill(0)
            rect(rectSize*i, rectSize*v, rectSize, rectSize)
          } else if (i % 2 === 1 && v % 2 === 0){
            fill(0)
            rect(rectSize*i, rectSize*v, rectSize, rectSize)
          }
          
        }
    }

}

//fill이랑 function은 바로 짝꿍처럼 붙어잇어야 fill이 수식할 것을 찾음. 아니면 그냥 전체를 다 ,fill해버리고 전에 잇던 background도 cascade법칙이 적용되어서 그냥 캔버스 전체가 fill됨!