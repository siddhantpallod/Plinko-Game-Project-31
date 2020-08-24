class Ground{
    constructor(){
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(100,570,2000,10,options);
      World.add(world,this.body);
      }
  
      display(){
          var pos = this.body.position;
          push();
          //translate(pos.x,pos.y);
          rectMode(CENTER);
          fill("white");
          rect(240,570,1200,10);
          pop();
      }
  }