var bullet,wall,thicknes;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thicknes = random(22,83);
 bullet = createSprite(50, 200, 50, 50);
 bullet.velocityX = speed;
 bullet.shapeColor = "red";
 wall = createSprite(1200,200,thicknes,height/2);
 wall.shapeColor = "white";
}

function draw() {
  background(0);
  if (hasCollided(bullet,wall)){
    car.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thicknes * thicknes * thickness);
    if (damage > 10){
      car.shapeColor = color (255,0,0);
    }
    
    if (damage < 10){
      car.shapeColor = Color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}