class Stone{
    constructor(x,y,width,height){
    var body_options = {
    isStatic : true    
    }
    this.body = Bodies.rectangle(x ,y,width,height,body_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }   
    display(){
    var pos = this.body.position;
    fill(255);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);  
    }
    }