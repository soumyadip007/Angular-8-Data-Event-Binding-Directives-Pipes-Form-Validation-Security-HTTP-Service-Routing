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


    getX()
    {
        return this.x;
    }


    // getDistance(another : Point)
    // {

    // }
}

let obj=new Point(10,20);
//obj.x=10;
//obj.y=20;
let x=obj.getX();
console.log(x);
obj.draw();

//X: 10, Y:20