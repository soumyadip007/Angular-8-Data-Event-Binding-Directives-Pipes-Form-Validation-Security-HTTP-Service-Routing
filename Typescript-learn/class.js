var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
        this.y = 20;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var obj = new Point();
//obj.x=10;
//obj.y=20;
obj.draw();
//X: 10, Y:20
