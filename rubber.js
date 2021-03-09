class Rubber{
    constructor(x,y,radius){
    var options = {
    'density' : 1,
    'friction' : 5,
    'restitution' :0.3
    };
    this.body = Bodies.circle(x ,y ,radius);
    this.radius = radius;
    World.add(world,this.body);
    }   
    display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius);  
    }
    }