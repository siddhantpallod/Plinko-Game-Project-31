class Plinko {
    constructor(x,y,){
        var options = {
            isStatic : true,
            restitution : 1,
            friction : 0.0
        }

        this.x = x;
        this.y = y;
        
        
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        rotate(angle);
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,20,20);
        pop();
    }
}