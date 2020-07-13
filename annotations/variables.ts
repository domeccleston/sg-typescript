let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Builtin objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number }= JSON.parse(json);
console.log(coordinates);


/* 
When to use type annotation:
1) when returning a function with return type any
2) when declaring and initializing on separate lines
3) 
*/