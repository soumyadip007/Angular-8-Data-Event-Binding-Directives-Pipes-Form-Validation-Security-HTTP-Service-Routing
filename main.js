/*
4 Typecasting
let message;
message='abc';

let endWithC= message.endsWith('c');
let endWithC1=(<string>message).endsWith('c');
let endWithC2= (message as string).endsWith('c');

console.log(endWithC+" ")

/*
3. Type

let a: number;
let b: boolean;
let c:string;
let d:any;
let e: number[]= [1, 2,3 ];
let f: any[]=[1, true, 'a', false];


const ColorRed=0;
const ColorGreen=1;


enum Color{Red=0, Green=1, Blue=3};
let bg=Color.Red;


/*
2.

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



/*

1.
function func(message)
{
    console.log(message);
}

var msg="Hello World";

func(msg);*/ 
