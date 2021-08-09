
function preload(){
  playerImage=loadAnimation("player.png","player2.png","player3.png","player4.png","player5.png","player6.png")

  bgImage=loadImage("bg_image.jpg")
}



function setup() {
  createCanvas(windowWidth,400);

    player= createSprite(1100, 200, 50, 50);
    player.addAnimation("Animation",playerImage)

    player.scale=0.5
    
    ground = createSprite(width/2,height-60,width,10);
    ground.x = ground.width /2;
    ground.velocityX=4
   


}

function draw() {
  background(bgImage);  

  if(keyDown("space")){
    player.velocityY=-10
  }
   
  player.velocityY=player.velocityY+1

  if(ground.x>1100){
    ground.x = ground.width /2;
  }
  
  player.collide(ground)

  spawnObstacle()
  drawSprites();
}

function spawnObstacle(){
if (frameCount%70 === 0){
  ball =createSprite(50,50,20,20)
  ball.velocityX=5
}
}