var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
 // fixedrect = createSprite(600,400,50,80);
 fixedrect = createSprite (400,100,50,80);
  fixedrect.shapeColor = "cyan";
  fixedrect.debug = true ;
  fixedrect.velocityY = 5;
  
 // movingrect = createSprite (400,200,80,30);
 movingrect = createSprite(400,800,80,30);
  movingrect.shapeColor = "cyan";
  movingrect.debug = true;
  movingrect.velocityY = -5;

}

function draw() {
  background(0,0,0); 
  /*movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  if(isTouching(movingrect,fixedrect)){
      movingrect.shapeColor = "green";
      fixedrect.shapeColor = "green";
    } 
    else {
      movingrect.shapeColor = "cyan";
      fixedrect.shapeColor = "cyan";
    }*/

bounceOff(movingrect,fixedrect);
    
  drawSprites();
}