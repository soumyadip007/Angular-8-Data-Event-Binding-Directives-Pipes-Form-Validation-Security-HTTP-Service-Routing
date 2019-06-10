var Point = /** @class */ (function () {
    //   private x: number;
    // private y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //  this.x=x;
        //   sthis.y=y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new console.error('Value cannot be less than 0');
        this.x = value;
    };
    return Point;
}());
var obj = new Point(10, 20);
//obj.x=10;
//obj.y=20;
var x = obj.getX();
console.log(x);
obj.draw();
obj.setX(100);
obj.draw();
//X: 10, Y:20
