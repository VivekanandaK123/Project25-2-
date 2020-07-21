class Box1{
    constructor(x,y,width,height){
     var options = {
         isStatic:true
     }
  
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image = loadImage("Sprites/dustbingreen.png");
     World.add(world,this.body);
  
    }
  
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,100,100);
    pop();
    }
  
  }