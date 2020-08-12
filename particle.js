class Particle
{
    constructor(x)
    {
        var options = 
        {
            restitution: 0.4
        }
        this.body = Bodies.circle(x, 0, 10, options);
        World.add(world, this.body)
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.radius = 10;
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color)
        noStroke();
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}