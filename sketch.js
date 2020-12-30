//Create variables here
var dog,dog1, happyDog;
var database, foodS, foodStock
function preload()
{
  //load images here
  dog1=loadImage("dog.png")
  happyDog=loadImage("dog1.png")

}

function setup() {
  database=firebase.database();
  console.log(database)

	createCanvas(500, 500);
  
  dog=createSprite(250,250,20,20)
  dog.addImage(dog1)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock,ShowError)
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
textSize(20)
fill(255)
stroke(2.5)
text("Note:Press UP_ARROW key to feed Drago Milk",200,50)
}


function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

function ShowError()
{
    console.log("error in the writing to the database")
}