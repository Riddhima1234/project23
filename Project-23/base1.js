 class base1 {
     constructor() {
         var options = {
             isStatic: true
         };
         this.width = width;
         this.lenght = lenght;
         this.height = height;
         this.image = loadImage ("./assests/base1.png");

         World.add(world, this.body);

     display()
         var pos = this.body.position;
         rectmode(LEFT);
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