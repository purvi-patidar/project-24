class Dustbin
{
	constructor(x,y,width,height)
	{
        var options={
            isStatic:true
        }
		this.x=x;
		this.y=y;
		this.Width=width;
        this.Height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.Width,this.Height,options);
        World.add(world,this.body);

		

	}
	display()
	{
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.Width,this.Height);

    }
			
			

			

}