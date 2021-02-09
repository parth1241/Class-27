class SHOT{
    constructor(bodyA,bodyB)
    {var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:100,
        stiffness:1
    }
     this.slingshot=Constraint.create(options)
     World.add(world, this.slingshot);
    }
    display(){
     var pointA = this.slingshot.bodyA.position
     var pointB = this.slingshot.bodyB.position
     line(pointA.x,pointA.y,pointB.x,pointB.y)   
    }

}