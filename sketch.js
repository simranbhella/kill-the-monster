const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, monster1Img, monster2Img, superHero1Img, superHero2Img;
var ground, hero, fly;


function preload() {
//preload the images here
backgroundImg = loadImage("imgs/GamingBackground.png");
monster1Img = loadImage("imgs/Monster-01.png");
monster2Img = loadImage("imgs/Monster-02.png")
superHero1Img = loadImage("imgs/Superhero-01.png");
superHero2Img = loadImage("imgs/Superhero-02.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(1500,780,3000,40);
  hero = new Hero(500,600);
  fly = new Fly(hero.body,{x:500, y:600});
}

function draw() {
  background(backgroundImg);


ground.display();
hero.display();
fly.display();

}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

