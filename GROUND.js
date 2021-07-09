class groundClass{
    constructor(x,y,width,height){
        //properties of physics engine
        var options={
        isStatic:true
        }
        //the object getting created 
        this.body=Bodies.rectangle(x,y,width,height,options)  
        //properties 
        this.width=width;
        this.height=height;
        //adding the created object into the world 
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill("green")
        rect(pos.x,pos.y,this.width,this.height)
    }
}