class Monster{
    constructor(x,y,width,height){
        options={
            isStatic:true,
            resitution:0.5,
            friction:1.0
        }
        this.body=Bodies.rectngle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image=loadImage("images/Monster-01.png")
        World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}