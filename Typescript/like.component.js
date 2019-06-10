"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(count, selected) {
        this.count = count;
        this.selected = selected;
    }
    LikeComponent.prototype.onclick = function () {
        // if(this.selected)
        // {
        //     this.count--;
        //     this.selected=false;
        // }
        // else{
        //     this.count++;
        //     this.selected=true;
        // }
        this.count += (this.selected) ? 1 : -1;
        this.selected = !this.selected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
