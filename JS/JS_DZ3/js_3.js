
/* Задача № 1 */

let A = [ 12, 4, 3, 10, 1, 20 ];
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

/* Задача № 4 */ // Полагаю, что в этой задаче нужно использовать способы, которые мы не проходили. Сидел всю ночь, решить не смог.

let happy = 0;
for (let i = 1; i < 1000000; i++) {
    let num = i.toString().padStart(6, '0');
    while (num) {
        let sum1 = parseInt(num[0] + num[1] + num[2]);
        let sum2 = parseInt(num[3] + num[4] + num[5]);
        if (sum1 === sum2) {
            happy++;
        }
    }
}
console.log("Всего счастливых билетов: " + happy);