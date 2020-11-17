const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;

  var gOption={
    isStatic:true
  }
ground= Bodies.rectangle(200,390,400,10,gOption);
World.add(world,ground);

var bOption={
  restitution:1.0
}
ball=Bodies.circle(100,100,20,bOption);
World.add(world,ball);
}

function draw() {
  background("lightblue"); 
  var pos=ground.position;
  Engine.update(engine);

  fill("green");
  rectMode(CENTER) ;
 rect(pos.x,pos.y,400,10)

fill("red");
ellipse(ball.position.x,ball.position.y,20,20);
}
