class base2 {
    constructor() {
        var options = {
            isStatic: true
        };
        this.width = width;
        this.lenght = lenght;
        this.height = height;
        this.image = loadImage ("./assests/base2.png");

        World.add(world, this.body);

    display() 
        var pos = this.body.position;
        rectmode(RIGHT);
        rectangle(0,0, this.width, this.height);
    

    }

    display() {
       var pos = this.body.position;
       var angle = this.body.angle;
   
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
   
       pop();
     }
}