var suelo;
var imgSuelo;





function preload(){
imgSuelo=loadImage("imagen3.png");

}


function setup() {
  createCanvas(1400,500);
 suelo=createSprite(-110, 400, 1900, 20);
 suelo.x=suelo.width/2;
suelo.addImage("suelo",imgSuelo);
}




function draw() {
  background(180);  
suelo.velocityX=3;

  drawSprites();
}
