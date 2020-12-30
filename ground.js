class Ground
{
    constructor(x,y,width,height)
    {
        var opt={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
        World .add(world,this.body);
    }
    display()
    {
        push ();
        translate (this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        fill (255,255,0)
        rect(0,0,this.width,this.height);
        pop ();
    }
}