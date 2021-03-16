class Drops{
    constructor(x,y){
       object = {
           'friction' : 0.1
       }
        this.body = Matter.Bodies.circle(x,y);
        
    }
    display(){

        ellipse(0,0,this.radius);
        fill("blue"); 
     
    for(var i=0; i < maxDrops; i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    } 
    }
 
}