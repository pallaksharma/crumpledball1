
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Paper1,block1,block2,block3;
var ground;


function preload(){


}

function setup() {
	createCanvas(1600, 500);
	engine = Engine.create();
	world = engine.world;
	


	


	//Create the Bodies Here.


	


	Paper1 = new Paper(300,300,40);
	ground = new Ground(800,485,1600,20);
	block1 = new Dustbin(1200,460,200,20);
	block2 = new Dustbin(1090,420,20,100);
	block3 = new Dustbin(1310,420,20,100);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine)

  Paper1.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  drawSprites();

  function keyPressed(){
	if(keyCode === UP_ARROW ){
	Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:85,y:-85});
	
	  
  }
 
}

}


