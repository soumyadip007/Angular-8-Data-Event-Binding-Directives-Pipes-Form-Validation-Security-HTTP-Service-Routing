class Point{
 //   private x: number;
// private y: number;

   

    constructor(private x?: number,private y?: number)
    {
      //  this.x=x;
     //   sthis.y=y;
    }

    draw(){

        console.log('X: '+ this.x +', Y:'+ this.y);

    }

    getDistance(another : Point)
    {

    }
}

let obj=new Point(10,20);
//obj.x=10;
//obj.y=20;
obj.draw();

//X: 10, Y:20