class rope{
    constructor( body1,body2,offsetX,OffsetY)
{
    this.offsetX = offsetX;
    this.offsetY = offsetY;

        var options={
            bodyA: body1,
            pointB: point2,
           pointB:{x:this.offset.x,y:this.offset.y}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
       
    }
   

    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyBposition;
        strokeWeight(2);
        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;
        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.Y+this.offsetY;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
            pop();
        }
    }
    

