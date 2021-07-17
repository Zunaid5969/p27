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

  rope1=new rope(bobObject1.body,roof.body,-200, 0)
	rope2=new rope(bobObject2.body,roof.body,-100, 0)
	rope3=new rope(bobObject3.body,roof.body,0, 0)
	rope4=new rope(bobObject4.body,roof.body,100, 0)
	rope5=new rope(bobObject5.body,roof.body,200, 0)
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
  rope1.display();
  rope2.display(); 
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
  
  
}



