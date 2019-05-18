let totalSquare = 1000;
let heightGardenBed = 15;
let widthGardenBed = 25;
let squareGardenBed = heightGardenBed * widthGardenBed;
let freeSquare = (totalSquare % squareGardenBed) / 100;
console.log(freeSquare + " соток");

let squareBig = 1500;
let squareSmall = 600;
let squareRing = squareBig - squareSmall;
console.log(squareRing + " см2");

let a = 7;
let b = 6;
let c = 5;
let smallest = (a < b && a<c) ? a :
(b < a && b<c) ? b :
c;
console.log(smallest + " is the smallest number");

let m = 5.15;
let n = 12.45;
let ostatokM = Math.abs (10 - m);
let ostatokN = Math.abs (10 - n);
let mostCloseToTen = (ostatokM < ostatokN) ? m : n;
console.log(mostCloseToTen + " ближайшее к десяти");

/* Пятая здача */

let xa = 0;
let ya = 0;
let za = 2;

let xb = 3;
let yb = 0;
let zb = 0;

let xc = 0;
let yc = 0;
let zc = 0;

/* let AB = Math.sqrt(Math.pow(xb - xa) + Math.pow(yb - ya) + Math.pow(zb - za));
let AC = Math.sqrt(Math.pow(xc - xa) + Math.pow(yc - ya) + Math.pow(zc - za));
let BC = Math.sqrt(Math.pow(xc - xb) + Math.pow(yc - yb) + Math.pow(zc - zb)); */

let AB = (xb - xa) * (xb - xa) + (yb - ya) * (yb - ya) + (zb - za) * (zb - za);
let AC = (xc - xa) * (xc - xa) + (yc - ya) * (yc - ya) + (zc - za) * (zc - za);
let BC = (xc - xb) * (xc - xb) + (yc - yb) * (yc - yb) + (zc - zb) * (zc - zb);

let result = AB * AB === (AC * AC) + (BC * BC)? "треугольник прямоугольный": 
AC * AC === (AB * AB) + (BC * BC)? "треугольник прямоугольный": 
BC * BC === (AB * AB) + (AC * AC)? "треугольник прямоугольный":
"треугольник НЕпрямоугольный";

console.log(result);