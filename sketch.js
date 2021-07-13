const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobobject1 = new bob(400,575,40)
	bobobject2 = new bob(400,575,40)
	bobobject3 = new bob(400,575,40)
	bobobject4 = new bob(400,575,40)
	bobobject5 = new bob(400,575,40)
	roof=new roof(400,100,550,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobobject1 .display();
  bobobject2 .display();
  bobobject3 .display();
  bobobject4 .display();
  bobobject5 .display();
  roof.display();
  drawSprites();
  
  
}



