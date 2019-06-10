var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var bg = Color.Red;
/*

let count=5;
count='a';


function doSomething()
{
    for(let i=0;i<19;i++)
    {
        console.log('Finally: '+i);
    }

 //   console.log('Finally: ');

}

doSomething();



/*function func(message)
{
    console.log(message);
}

var msg="Hello World";

func(msg);*/ 
