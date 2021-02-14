var canvas;
var music;
var surface1 , surface2 , surface3 , surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,560,200,20);
    surface2 = createSprite(300,560,200,20);
    surface3 = createSprite(500,560,200,20);
    surface4 = createSprite(700,560,200,20);

    surface1.shapeColor = "red";
    surface2.shapeColor = "blue";
    surface3.shapeColor = "yellow";
    surface4.shapeColor = "green";



    //create box sprite and give velocity
    box = createSprite(random(50,750),200,20,20);
    box.shapeColor = "white";
    box.velocityX = random(-5,5);
    box.velocityY = random(4,-6);

}

function draw() {
    background(rgb(box.x,169,box.y));

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(isTouching(box , surface1)){
        box.shapeColor = "red";
        music.play();
    }
    if(isTouching(box , surface2)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }
    if(isTouching(box , surface3)){
        box.shapeColor = "yellow";
        music.play();
    }
    if(isTouching(box , surface4)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }



    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

    drawSprites();
}

function isTouching(ob1 , ob2){
    if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2
      && ob2.x - ob1.x < ob1.width/2 + ob2.width/2
      && ob1.y - ob2.y < ob1.height/2 + ob2.height/2
      && ob2.y - ob1.y < ob1.height/2 + ob2.height/2) {
        return true;
  }
  else {
    return false;
  }
  }

function BounceOff(ob1 , ob2){
    if(ob1.x - ob2.x < ob1.width/2 + ob2.width/2 &&
      ob2.x - ob1.x < ob1.width/2 + ob2.width/2){
        ob1.velocityX = (ob1.velocityX)*(-1);
      }
      else if(ob1.y - ob2.y < ob1.height/2 + ob2.height/2 &&
        ob2.y - ob1.y < ob1.height/2 + ob2.height/2){
          ob1.velocityY = (ob1.velocityY)*(-1);
        }
    }