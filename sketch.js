var canvas;
var music;
var ball, fixwall1, fixwall2, fixwall3, fixwall4;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    fixwall1 = createSprite(520, 580 , 130, 20);
    fixwall1.shapeColor = "green";
    fixwall2 = createSprite(375, 580 , 130, 20);
    fixwall2.shapeColor = "blue";
    fixwall3 = createSprite(80, 580 , 130, 20);
    fixwall3.shapeColor = "red";
    fixwall4 = createSprite(230, 580 , 130, 20);
    fixwall4.shapeColor = "yellow";
    //create box sprite and give velocity
    ball = createSprite(random(20, 580));
    ball.width = 20;
    ball.height = 20;
    ball.shapeColor = "black";
    ball.velocityY = 3;
    //edge surface
    surface1 = createSprite(280, 0, 900, 10);
    surface1.visible = false;
}

function draw() {
    background("pink");
    //create edgeSprite
    ball.bounceOff(surface1);
    drawSprites();
    //add condition to check if box touching surface and make it box
    if(fixwall1.isTouching(ball)) {
        ball.shapeColor = "green";
        ball.bounceOff(fixwall1);
        music.play();
    }
    if(fixwall2.isTouching(ball)) {
        ball.shapeColor = "blue";
        ball.bounceOff(fixwall2);
        music.play();
    }
    if(fixwall3.isTouching(ball)) {
        ball.shapeColor = "red";
        ball.bounceOff(fixwall3);
        music.play();
    }
    if(fixwall4.isTouching(ball)) {
        ball.shapeColor = "yellow";
        ball.bounceOff(fixwall4);
        music.play();
    }
}
function isTouching(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2 
      && object1.x - object2.x < object2.width/2 - gameobject1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object1.y - object2.y < object2.height/2 - object1.height/2) {
     return true;
    }
    else{
      return false;
    }
  }
  
  function bounceOff(gameobject1, gameobject2){
    if(gameobject1.x - gameobject2.x < gameobject2.width/2 + gameobject1.width/2 
      && gameobject1.x - gameobject2.x < gameobject2.width/2 - gameobject1.width/2){
     gameobject2.velocityX = gameobject2.velocityX*(-1);
     gameobject1.velocityX = gameobject1.velocityX*(-1);
    }
    if(gameobject1.y - gameobject2.y < gameobject2.width/2 + gameobject1.width/2 
      && gameobject1.y - gameobject2.y < gameobject2.width/2 - gameobject1.width/2){
     gameobject2.velocityY = gameobject2.velocityY*(-1);
     gameobject1.velocityY = gameobject1.velocityY*(-1);
    }
  }
