
var frect,mrect;
var ob1,ob2,ob3;
function setup() {
  createCanvas(1200,800);
  frect = createSprite(600,400,50,80);
  frect.shapeColor = "green";
  frect.debug = true;
  mrect = createSprite(400,200,80,30);
  mrect.shapeColor = "green";
  mrect.debug = true;

  ob1 = createSprite(100,200,30,30);
  ob2 = createSprite(200,200,30,30);
  ob3 = createSprite(300,200,30,30);

  ob1.velocityX=2;
  ob2.velocityX=-2;
}

function draw() {
  background(0);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 

  if(isTouching(ob2,mrect)){
    ob2.shapeColor = "red";
    mrect.shapeColor = "red";
  }
  else{
    mrect.shapeColor = "green";
    ob2.shapeColor = "green";
  }
  bounceoff(ob1,ob2);
  drawSprites();
}

