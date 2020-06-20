var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400,660);
	ground=new Ground(width/2,670,width,20);
	dustbin1 = new Dustbin(989,605,20,110);
	dustbin2 = new Dustbin(1100,650,200,20);
	dustbin3 = new Dustbin(1212,605,20,110)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:450,y:-450});
	}
}



