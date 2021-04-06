var mRect
var fRect


function setup() {

  createCanvas(800,400);
 mRect=createSprite(400, 200, 50, 50);
 fRect=createSprite(200,100,50,50);

 mRect.shapeColor="red"
 fRect.shapeColor="red"
}
function draw() {
  background(255,255,255);  
  drawSprites();
  mRect.x=mouseX
  mRect.y=mouseY
  console.log(mRect.y-fRect.y)
  

if(mRect.x-fRect.x<mRect.width/2+fRect.width/2 && fRect.x-mRect.x<
  mRect.width/2+fRect.width/2 && mRect.y-fRect.y<mRect.height/2+fRect.height/2 && fRect.y-mRect.y<mRect.height/2+fRect.height/2){
  mRect.shapeColor="yellow"
  fRect.shapeColor="yellow"

}else{
mRect.shapeColor="red"
 fRect.shapeColor="red"
}

}

