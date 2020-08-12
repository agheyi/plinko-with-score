const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;
var score = 0;
var state = "start"
var count = 0;
engine = Engine.create(),
world = engine.world;


var plinkos = [];
var particle = null;
var turn;
var div = [];

function setup() {
  Engine.run(engine)
  cnv = createCanvas(480,800);

  ground = new Ground(width/2, height-5, width, 20);

  for (var i = 0; i <= width; i = i + 60)
  {
    div.push(new Division(i));
  }

  for (var i = 50; i <= 500; i = i + 100)
  {
    for (var j = 40; j <= 440; j = j + 40)
    {
      plinkos.push(new Plinko(j, i));
    }
  }
  for (i = 100; i <= 550; i = i + 100)
  {
    for (var j = 20; j <= 460; j = j + 40)
    {
      plinkos.push(new Plinko(j, i));
    }
  }
}

function draw() {
  background(0);  
  cnv.mousePressed()

  textSize(20);
  text("Score : "+score,20,30);
  text("400", 13, 720);
  text("300", 73, 720);
  text("200", 133, 720);
  text("100", 193, 720);
  text("100", 253, 720);
  text("200", 313, 720);
  text("300", 373, 720);
  text("400", 433, 720);

  ground.display();

  for (var i = 0; i < div.length; i ++)
  {
    div[i].display();
  }

  for (var i = 0; i < plinkos.length; i ++)
  {
    plinkos[i].display();
  }

  if (particle !== null)
  {
    particle.display();
    if (particle.body.position.y > 600)
    {
      if (particle.body.position.x < 60 && particle.body.position.x > 0)
      {
        score = score + 400;
        particle = null;
        if (count >= 5) state = "end"
      }
      else if (particle.body.position.x < 120 && particle.body.position.x > 60)
      {
        score = score + 300;
        particle = null;
        if (count >= 5) state = "end"
      }  
      else if (particle.body.position.x < 180 && particle.body.position.x > 120)
      {
        score = score + 200;
        particle = null;
        if (count >= 5) state = "end"
      }  
      else if (particle.body.position.x < 240 && particle.body.position.x > 180)
      {
        score = score + 100;
        particle = null;
        if (count >= 5) state = "end"
      }  
      else if (particle.body.position.x < 300 && particle.body.position.x > 240)
      {
        score = score + 100;
        particle = null;
        if (count >= 5) state = "end"
      }  
      else if (particle.body.position.x < 360 && particle.body.position.x > 300)
      {
        score = score + 200;
        particle = null;
        if (count >= 5) state = "end"
      }  
      else if (particle.body.position.x < 420 && particle.body.position.x > 360)
      {
        score = score + 300;
        particle = null;
        if (count >= 5) state = "end"
      }  
      else if (particle.body.position.x < 480 && particle.body.position.x > 420)
      {
        score = score + 400;
        particle = null;
        if (count >= 5) state = "end"
      }   
    }
  }
  
}
function mousePressed()
{
  if (state !== "end")
  {
    count++;
    particle = new Particle(mouseX); 
  }
}
