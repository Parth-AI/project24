class Paper{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':2.0,
        'density':1.0,
       isStatic : false
    }
    this.body = Bodies.circle(200, 200, 30,options);
    this.width = 50;
    this.height = 50;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill(255);
    circle(0,0, this.width, this.height);
    pop();
  }
}
