//==========Types===========

/*
- string;
- number;
- boolean;
- Arrays;  You may also see this written as Array<number> - Generic
- any;
  the default value if the TS can`t to define type;
  we can use flag noImplicitAny, because any isn’t type-checked;
- Functions
- Object Types
- Union Type
*/

//string----------
let myName: string = "Alice";
let userName = "Alice";

//number----------
let myNum: number = 13;

//boolean----------
let isTrue: boolean = true;

//Arrays-----------
let arrByString: string[] = ['1', '2'];
let arrByNumbers: number[] = [1, 2];


//any--------------
let obj: any = {x: 0};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

//functions----------
// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet('Kate');

//Return Type Annotations
function getFavoriteNumber(): number {
    return 26;
}

getFavoriteNumber();

//Anonymous Functions
const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
    console.log(s.toUpperCase());
});

//Object Types--------

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 3, y: 7});

//Optional Properties
function printName(obj: { first: string, second?: string, }) {
    //..
}
//Both OK
printName({first: 'Kate'});
printName({first: 'Kate', second: 'Mary',});

//We must not forget to check if the optional parameter is not provided!!!
function printName2(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());

    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}