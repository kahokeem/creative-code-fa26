//


let flashing = false
let flareMaxSize = 250

let disco;
let scream;


let discoball;
let ballAngle = 0;

let singer;
let audiences = [];
let offsetY = 20;


function preload () {
scream = loadSound("Crowd Cheer Sound Effect.mp3")
disco = loadSound("jadore.mp3")
discoball = loadImage("Discoball.png")

}


function setup() {
  let cnv = createCanvas(700, 500);
  frameRate(30)

  singer = {
    bodyPos: createVector(285, height*.8),
    headPos: createVector(300, height*0.77),
    bodyWidth: 30,
    bodyHeight: 40,
    bodyRound: 15,
    headSize: 18,
    fillColor: color(100, 200, 250),
    hovered: false,
    moveTime:0,
    jumpY: 0,
    jumpSpeed: -1
    
    }
    
    //audiences
    // 1st floor 
    makeAudienceSection(
    30, 70, 670, 70,
    20, 150, 680, 150,
    3, 7
    )

    // 1st floor: middle
    makeAudienceSection(
    90, 200, 620, 200,
    310, 335, 510, 335,
    4, 10
    )

    // 1st floor: left side of the stage
    makeAudienceSection(
    20, 290, 330, 400,
    10, 485, 45, 485,
    5, 16
    )

    // 1st floor: right side of the stage
    makeAudienceSection(
    465, 350, 650, 290,
    380, 485, 690, 485,
    5, 16
    )
}

function draw() {
  background(0);


// audiences
noStroke()
fill(255)

for (let i = 0; i < audiences.length; i++) {
  let person = audiences[i]


  person.velocityY += 0.5
  person.y += person.velocityY

//touch the ground
  if (person.y >= person.groundY) {
    person.y = person.groundY

    if (singer.hovered) {
      person.velocityY = -random(2, 4)
      
    } else {
      person.velocityY = 0
    }
  }
  fill(person.shade)
  circle(person.x, person.y, person.size)
}


  
//stage
  let startX = width*0.1
  let startY = height

  stroke(70)
  fill(70)
  quad (startX-10, startY, startX+330, startY*0.75, startX+370, startY*0.75, startX+180, startY )

  stroke(20)
  fill(20)
  quad (startX+180, startY, startX+370, startY*0.75, startX+368, startY*0.75+10,startX+280, startY)

  
//a singer


let moveY;
let moveX;


  
//hovering statement
  if (singer.hovered === true) {
    // singer
    moveY = -30
    moveX = 96
    
    singer.jumpY += singer.jumpSpeed
    
if (singer.jumpY <= -5){
  singer.jumpY = -5
    singer.jumpSpeed= 1
} else if (singer.jumpY >= 0){
  singer.jumpY = 0
    singer.jumpSpeed= -1
}

  
      fill(singer.fillColor)
  stroke(0)
  circle(singer.headPos.x + moveX - moveX/12, 
         singer.headPos.y + moveY + singer.jumpY,
         singer.headSize/2)
  rect(singer.bodyPos.x+ moveX, 
       singer.bodyPos.y + moveY + singer.jumpY, singer.bodyWidth/2, singer.bodyHeight/2, singer.bodyRound)

    //bubble

    let bubbleX = singer.headPos.x+ moveX - 5
    let bubbleY = singer.headPos.y + moveY - 60
    fill(255)
    rect(bubbleX, 
        bubbleY,
       123, 40, 10)

    let rock = "Make some noise!!!"
    fill(0)
    noStroke()
    textSize(12)
    textAlign(CENTER, CENTER)
    text(rock, bubbleX+63, bubbleY + 20)


  // stroke(random(255))
    x=random(width)
    y=random(height)
    fill(random(255),random(255),random(255),80)
    circle(x+50,y+50,lerp(0,x/50,4));

    fill (255, 100)
    circle (random(width), random(height), 10)

  //  stage lights


      noStroke();
      gap1 = 20
      gap2 = 40
      a = random(startX, startX + 280)
       //startX < a < startX+280
      c = random(startY * .75, startY)
  
      fill(random(255),random(255),random(255),60)
      quad (0, 0, 0, 0, a, c, a+40, c)
      quad (width, 0, width, 0, a, c, a-40, c-20)

    // fill (255, 255, 255, 100)
    // quad (width/2, 0, width/2,0, singer.bodyPos.x, singer.bodyPos.y, singer.bodyPos.x+200, singer.bodyPos.y)


    //music
      if (!disco.isPlaying()) {
    disco.loop()
  }
    if (!scream.isPlaying()) {
        scream.loop()}


    //audiences



    push()


    ballAngle += 0.05;
    translate(width/2, 0)
    rotate(ballAngle)
    
    imageMode(CENTER)
    image(discoball, 0, 0, 100, 100)
    pop()


  } 
  //!hovered
  else {
    moveY = 0
    singer.jumpY = 0
    singer.jumpSpeed = -1

      fill(singer.fillColor)
  stroke(0)
  circle(singer.headPos.x, singer.headPos.y + moveY,
         singer.headSize)
  rect(singer.bodyPos.x, singer.bodyPos.y + moveY, singer.bodyWidth, singer.bodyHeight, singer.bodyRound)

  if (disco.isPlaying()) {
    disco.stop()
  }
 if (scream.isPlaying()) {
    scream.stop()
  }
push()
tint(255, 80)
image(discoball,width/2-50, -50, 100, 100)
pop()

}
}




function mouseMoved() {
  let mousePos = createVector(mouseX, mouseY)
  if(mousePos.dist(singer.headPos) < singer.headSize/2 ||
    mousePos.x > singer.bodyPos.x &&
    mousePos.x < singer.bodyPos.x + singer.bodyWidth &&
    mousePos.y > singer.bodyPos.y &&
    mousePos.y < singer.bodyPos.y + singer.bodyHeight
    ) {
    singer.fillColor = color(255, 0, 0)
    singer.hovered = true
  } else {
    singer.hovered = false
    singer.fillColor = color(100, 200, 250)
  }
   
  // //particles
  //   fill (255, 40)
  //   circle (random(width), random(height), 10)
}


//! means opposite state so this means when flashing(default false) is false, opposite is flashing true.


function makeAudienceSection(
  backLeftX, backLeftY,
  backRightX, backRightY,
  frontLeftX, frontLeftY,
  frontRightX, frontRightY,
  backSize, frontSize
) {
  let rows = 16

  let isBalcony = Math.max(
    backLeftY, backRightY,
    frontLeftY, frontRightY
  ) < 180

  for (let row = 0; row < rows; row++) {
    
    
    //depth (will be decreased) gradually from back to front
    let depth = row / (rows - 1)

    let leftX = lerp(backLeftX, frontLeftX, depth)
    let leftY = lerp(backLeftY, frontLeftY, depth)
    let rightX = lerp(backRightX, frontRightX, depth)
    let rightY = lerp(backRightY, frontRightY, depth)

    let rowLength = dist(leftX, leftY, rightX, rightY)
    let middleY = (leftY + rightY) / 2

    let estimatedSize = isBalcony
      ? lerp(2, 4, depth)
      : map(constrain(middleY, 200, 500), 200, 500, 3, 11)

    let gap = estimatedSize * 1.3
    let count = max(2, floor(rowLength / gap))

    for (let col = 0; col < count; col++) {
      let across = (
        col + 0.25 + (row % 2) * 0.5 + random(-0.3, 0.3)
      ) / count

      let personX = lerp(leftX, rightX, across)
      let personY = lerp(leftY, rightY, across)
        + random(-3, 3)

      let distanceRatio = constrain(
        (personY - 200) / 300, 0, 1
      )

      let baseSize = isBalcony
        ? lerp(2, 4, depth)
        : lerp(3, 11, distanceRatio)

      audiences.push({
        x: personX,
        y: personY,
        groundY: personY,
        size: baseSize * random(0.9, 1.1),
        shade: isBalcony
          ? 85
          : lerp(90, 190, distanceRatio),
        velocityY: 0
      })
    }
  }
}


function mousePressed() {
  userStartAudio()
}