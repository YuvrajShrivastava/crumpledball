class Paper{
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        //this.width = width;
       // this.radius = radius;
       this.image = loadImage("paper.png");
        World.add(world, this.body);
        
      }
      
      display(){
        var pos =this.body.position;
        //rectMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, pos.radius);
        push();
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 75, 75);
        pop();
      }

}

