var canvas;
var music;

var blueRect, orangeRect, redRect, greenRect;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
   
    blueRect = createSprite(100,590,200,10);
    blueRect.shapeColor = "blue";
    orangeRect = createSprite(300,590,200,10);
    orangeRect.shapeColor = "orange";
    redRect = createSprite(500,590,200,10);
    redRect.shapeColor = "red";
    greenRect = createSprite(700,590,200,10);
    greenRect.shapeColor = "green";
    fill(0);
    text(mouseX + ","+ mouseY, mouseX, mouseY);

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.velocityX = 1;
    box.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(blueRect);
    box.bounceOff(orangeRect);
    box.bounceOff(redRect);
    box.bounceOff(greenRect);
 
    if(box.x > 800){
        box.velocityX = -1;
    }
    if(box.x < 0){
        box.velocityX = 1;
    }
    if(box.y > 0){
        box.velocityY = 20;
    }
    //add condition to check if box touching surface and make it box
    if(box.isTouching(blueRect)){
        box.shapeColor = blueRect.shapeColor;
        box.velocityY = -20
    }
    if(box.isTouching(orangeRect)){
        box.shapeColor = orangeRect.shapeColor;
        box.velocityY = -20
    }
    if(box.isTouching(blueRect)){
        box.shapeColor = redRect.shapeColor;
        box.velocityY = -20
    }
    if(box.isTouching(greenRect)){
        box.shapeColor = greenRect.shapeColor;
        box.velocityY = -20
    }
    drawSprites();
}
