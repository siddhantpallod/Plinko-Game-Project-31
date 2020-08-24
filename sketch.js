const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,570);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground();

  for(var k = 0; k <= width;k = k + 80){
    divisions.push(new Division(k,height - divisionHeight /2,10,divisionHeight));
  }
  
  for(var j = 75 ; j  <= width ; j = j + 50){
    plinkos.push(new Plinko (j,75));
  }

  for(var j = 50; j <= width; j = j + 50){
    plinkos.push(new Plinko (j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,250));
    }

    

}

function draw() {
  background(0); 
  Engine.update(engine);
  
  ground1.display(); 
  

  for(var i = 0 ; i < plinkos.length ; i++){  
    plinkos[i].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),15,15))
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  for(var k = 0; k < divisions.length ; k++){
    divisions[k].display();
  }


  
}