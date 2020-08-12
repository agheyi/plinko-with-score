class Ground
{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display()
    {
        strokeWeight(3);
        stroke("black")
        fill("white");
        rectMode(CENTER)
        rect(this.x, this.y, this.width, this.height);
    }
}