let totalSquare = 1000;
let heightGardenBed = 15;
let widthGardenBed = 25;
let squareGardenBed = heightGardenBed * widthGardenBed;
let freeSquare = (totalSquare - squareGardenBed) / 100;
console.log(freeSquare + " соток");

let squareBig = 1500;
let squareSmall = 600;
let squareRing = squareBig - squareSmall;
console.log(squareRing + " см2");

let a = 7;
let b = 6;
let c = 5;
let smallest = (a<b, a<c) ? a : (b<a, b<c) ? b : c;
console.log(smallest + " is the smallest number") ;

let m = 5.15;
let n = 12.45;
let ostatokM= m % 10;
let ostatokN= n % 10;
let mostCloseToTen = (ostatokM<ostatokN) ? m : n;
console.log(mostCloseToTen + " ближайшее к десяти");
