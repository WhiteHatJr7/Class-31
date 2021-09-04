class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke =loadImage("sprites/smoke.png");
    this.array=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x  > 10 && this.body.position.x > 200){
    var position=[this.body.position.x,this.body.position.y];
    this.array.push(position);
    }

    for(var d=0;d<this.array.length;d++){
image (this.smoke,this.array[d][0],this.array[d][1])
    

    }
  }
}
