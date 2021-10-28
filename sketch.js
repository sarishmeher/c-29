const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope1;
var fruit


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
rope1 = new Rope(6,{x:245,y:30})

var fruit_options = {density:0.001}
fruit = Bodies.circle(300,300,15,fruit_options);
Matter.Composite.add(rope1.body,fruit)
fruit_con=new Link(rope1,fruit)
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
rope1.show()
 
 ellipse(fruit.position.x,fruit.position.y,15,15);


}