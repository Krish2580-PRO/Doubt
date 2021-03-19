
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,side1,side2,side3
var paperBody
function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(500,500,1000,10)

	side1 = new Side(750,490,200,20)
	side2 = new Side(650,450,20,100)
	side3 = new Side(850,450,20,100)

	paper = new Paper(150,480)
	Engine.run(engine);
  
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground1.display()

side1.display()
side2.display()
side3.display()

paper.display()

paper.x= paperBody.position.x 
paper.y= paperBody.position.y 
keyPressed()
}

function keyPessed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85})	
	  }
}

