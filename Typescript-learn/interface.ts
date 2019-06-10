interface Point{
    x: number;
    y: number;
}

let drawPoint=(point : Point) =>{

    console.log(point.x + point.y);
}

drawPoint({
x:1,
y:2
})
