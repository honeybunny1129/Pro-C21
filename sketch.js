
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	
	engine = Engine.create();
	world = engine.world;

 ground= new Ground(400,390,800,20);
 left= new Ground(700,340,20,80);
 right= new Ground(570,340,20,80);
 

	var ball_options={
		restitution: 0.95,
		friction:0,
        density: 1.2
	}
 ball= Bodies.circle(100,200,20,ball_options);
 World.add(world,ball);
 ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
}


function keyPressed(){
   if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:650,y:340},{x:3,y:-5});
   }
}

