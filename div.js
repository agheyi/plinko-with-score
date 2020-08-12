class Division
{
    constructor(x)
    {
        var options = 
        {
            isStatic: true
        };
        this.body = Bodies.rectangle(x, 700, 10, 200, options);
        World.add(world, this.body)
        this.x = x;
        this.y = this.body.position.y;
        this.width = 10;
        this.height = 200;
    }
    display()
    {
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }
}