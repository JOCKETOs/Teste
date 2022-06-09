var box;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
}

function draw() 
{
  background("white");
  if(keyDown("d")){
    box.x = box.x + 5;
  }
  if(keyDown("s")){
    box.y = box.y + 5;
  }
  if(keyDown("a")){
    box.x = box.x - 5;
  }
  if(keyDown("w")){
    box.y = box.y - 5;
  }

  drawSprites();
}




