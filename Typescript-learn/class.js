var Point = /** @class */ (function () {
    //   private x: number;
    // private y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //  this.x=x;
        // this.y=y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var obj = new Point(10, 20);
//obj.x=10;
//obj.y=20;
obj.draw();
//X: 10, Y:20
