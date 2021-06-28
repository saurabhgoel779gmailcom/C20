var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,100,25);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed/10;
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var Damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(Damage>10)
    {
      bullet.shapeColor="red";
    }
    
    else
    {
      bullet.shapeColor="green";
    }
  }

  drawSprites();
}