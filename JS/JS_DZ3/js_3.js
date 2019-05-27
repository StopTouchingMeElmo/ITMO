/* Задача № 1 */

let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C1 = A.concat(B);
console.log("Массив В в конце массива А: " + C1);
let C2 = B.concat(A);
console.log("Массив В в начало массива А: " + C2.toString());
let C3 = B.concat(A, B);
console.log("Массив В в начало и конец массива А: " + C3.toString());

/* Задача № 3 */

let arr = [12, 4, 3, 10, 1, 20];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
let delmin = arr.indexOf(min);
arr.splice(delmin, 1);
let delmax = arr.indexOf(max);
arr.splice(delmax, 1);
console.log(arr);

/* Задача № 4 */

let happy = 0;
for (let i = 1; i < 1000000; i++) {
    let arr = i.toString().padStart(6, '0');
    let num = arr.split('');
    if ((parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2])) === (parseInt(num[3]) + parseInt(num[4]) + parseInt(num[5]))) {
        happy++;
    }
}
console.log("Всего счастливых билетов: " + happy);