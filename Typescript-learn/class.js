"use strict";
exports.__esModule = true;
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
    // get x()
    // {
    //     return this._x;
    // }
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
exports.Point = Point;
var obj = new Point(10, 20);
//obj.x=10;
//obj.y=20;
var z = obj.getX();
console.log(z);
obj.draw();
obj.setX(100);
obj.draw();
//let y=obj.x;
//console.log(y);
//X: 10, Y:20
