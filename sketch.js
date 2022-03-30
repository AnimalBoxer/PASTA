var coisa;
function setup() {
  createCanvas(400,400);
  coisa = createSprite (200,100,20,10);
}

function draw() 
{
  background(30);

if (keyIsDown(RIGHT_ARROW)){
  coisa.x += 5;
}
if (keyIsDown(LEFT_ARROW)){
  coisa.x -=5;
}

  drawSprites ();
}




