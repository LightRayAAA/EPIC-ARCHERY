const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1, playerbase
var computer1, computerbase

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
player1 = new Player(300, 230, 100, 200)
playerbase = new PlayerBase(300, 400, 200, 200)
computer1 = new ComputerPlayer(1000, 230, 100, 200)
computerbase = new ComputerBase(1000, 400, 200, 200)

 }

function draw() {

  background(180);

  Engine.update(engine);
  player1.display();
  playerbase.display();
  computer1.display();
  computerbase.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
