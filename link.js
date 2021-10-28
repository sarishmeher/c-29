class Link{

    constructor(bodyA,bodyB){

        var lastlink=bodyA.body.bodies.length-2
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastlink],
            pointA:{x:0,y:0},
            pointB:{x:0,y:0},
            bodyB:bodyB,stiffness:0.01,length:-10
        })
        World.add(engine.world,this.link)
    }
}