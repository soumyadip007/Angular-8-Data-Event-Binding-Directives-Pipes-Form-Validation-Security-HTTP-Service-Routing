class Point{
    x: number;
    y: number;

    constructor()
    {
        this.x=10;
        this.y=20;
    }

  

    draw(){

        console.log('X: '+ this.x +', Y:'+ this.y);

    }

    getDistance(another : Point)
    {

    }
}

let obj=new Point();
//obj.x=10;
//obj.y=20;
obj.draw();

//X: 10, Y:20