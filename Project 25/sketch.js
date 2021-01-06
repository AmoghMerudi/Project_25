const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall, wall1, wall2, base, dustbinImage;

function preload() {
   dustbinImage = loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(600,340,1200,10);
	ground.shapeColor = "brown";
	
	wall1 = createSprite(910,280,20,100);
	wall1.shapeColor = "white";

	wall2 = createSprite(1090,280,20,100);
	wall2.shapeColor = "white";

	base = createSprite(1000,250,200,20);
	base.shapeColor = 225;
	base.addImage(dustbinImage);
	base.scale = 0.5;

	var option = {
		isStatic: true
	}

	ground = Bodies.rectangle(600,340,1200,10,option);
	World.add(world, ground);

	wall1 = Bodies.rectangle(910,280,20,100,option);
	World.add(world, wall1);

	wall2 = Bodies.rectangle(1070,280,20,100,option);
	World.add(world, wall2);

	base = Bodies.rectangle(1000,280,200,20,option);
	World.add(world, wall2);

	paperBall = new Paperball(100,338,50);

	Engine.run(engine);

  keyPressed();
}


function draw() {
  background("white");
  Engine.update(engine);
  paperBall.display();
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:525,y:-525})
	}
}