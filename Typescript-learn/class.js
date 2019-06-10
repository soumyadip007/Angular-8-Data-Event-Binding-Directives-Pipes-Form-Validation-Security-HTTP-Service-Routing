var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var obj = new Point();
obj.x = 10;
obj.y = 20;
obj.draw();
