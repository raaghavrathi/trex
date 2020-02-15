var square, movingSquare,rect1, rect2, rect3;
function setup() {
    createCanvas(1200,800);
    square= createSprite(300, 200, 50, 80);
    movingSquare=createSprite(400,200,80,50)
    rect1=createSprite(100,100,50,50)
    rect2=createSprite(200,100,50,50)
    rect3=createSprite(300,100,50,50)
    rect1.shapeColor="green"
    rect2.shapeColor="green"
    rect3.shapeColor="green"
    square.shapeColor="blue"
    movingSquare.shapeColor="yellow"
}

function draw() {
  background(0);
  movingSquare.x=World.mouseX
  movingSquare.y=World.mouseY  

  console.log(movingSquare.x-square.x)

if(isTouching(rect3,movingSquare)){
  rect3.shapeColor="red"
  movingSquare.shapeColor="red"
  
}
else{
    rect3.shapeColor="green"
    movingSquare.shapeColor="yellow"
}

  drawSprites();
  
}

function isTouching(object1,object2) {

  if (object2.x-object1.x<(object2.width/2+object1.width/2) && 
  object1.x-object2.x<(object2.width/2+object1.width/2 )&&
  object2.y-object1.y<(object2.height/2+object1.height/2) && 
  object1.y-object2.y<(object2.height/2+object1.height/2)) {
   
    return true
  }
  else{
    return false
  

  }
  
}