
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,gnd,rop1,rop2,rop3,rop4,rop5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(180,300,50);
bob2=new Bob(230,300,50);
bob3=new Bob(280,300,50);
bob4=new Bob(330,300,50);
bob5=new Bob(380,300,50);
gnd=new Ground(270,100,300,20);
rop1=new Chain(bob1.body,gnd.body,-80,0);
rop2=new Chain(bob2.body,gnd.body,-40,0);
rop3=new Chain(bob3.body,gnd.body,0,0);
rop4=new Chain(bob4.body,gnd.body,50,0);
rop5=new Chain(bob5.body,gnd.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //Engine.update(engine);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  gnd.display();
  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45});

	}
}
