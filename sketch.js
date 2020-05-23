var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dust1,dust2,dust3;
function preload()
{

}

function setup() {
	createCanvas(800, 620);


	engine = Engine.create();
	world = engine.world;

	/*packageBody = Bodies.circle(400 , 200 , 50 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);*/

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	paper1 = new Paper(200,200,50,50);

	
	dust3 = new Dustbin(525,620,150,20);
	dust1 = new Dustbin(450,610,10,90);
	dust2 = new Dustbin(600,610,10,100);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
	Engine.update(engine);

	paper1.display();

	dust1.display();
	dust2.display();
	dust3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-90})
	}
}