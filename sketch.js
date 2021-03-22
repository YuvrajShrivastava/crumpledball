
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball,ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(50,100,12);
	ground1 = new Ground(400,250,800,10);
  ground2 = new Ground(400,50,800,10);

s1= new Dustbin(700,235,100,20);
s2= new Dustbin(650,205,20,100);
s3= new Dustbin(750,205,20,100);

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //ball.display();
  ball.display();
  ground1.display();
  ground2.display();
  s1.display();
  s2.display();
  s3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.5})
   
	}
}

