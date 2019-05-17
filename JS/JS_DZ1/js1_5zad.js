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
