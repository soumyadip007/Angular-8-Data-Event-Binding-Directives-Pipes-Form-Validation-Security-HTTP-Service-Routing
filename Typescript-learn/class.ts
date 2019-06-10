class Point{
    x: number;
    y: number;

    draw(){

        console.log('X: '+ this.x +', Y:'+ this.y);

    }

    getDistance(another : Point)
    {

    }
}

let obj=new Point();
obj.x=10;
obj.y=20;
obj.draw();

//X: 10, Y:20