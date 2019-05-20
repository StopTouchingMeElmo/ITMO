/* Задача № 1 */
let action = parseInt(prompt("Какой сейчас месяц?\n1-январь\n2-февраль\n3-март\n4-апрель\n5-май\n6-июнь\n7-июль\n8-август\n9-сентябрь\n10-октябрь\n11-ноябрь\n12-декабрь"));

switch (action) {
    case 6:
    case 7:
    case 8:
        alert("ЛЕТО");
        break;
    case 12:
    case 1:
    case 2:
        alert("ЗИМА");
        break;
    case 3:
    case 4:
    case 5:
        alert("ВЕСНА");
        break;
    default:
        alert("ОСЕНЬ");
}

/* Задача № 2 */

let standard = parseInt(prompt("Выберите единицу измерения:\n1-дециметр\n2-километр\n3-метр\n4-миллиметр\n5-сантиметр"));
let length = parseInt(prompt("Введите длину отрезка:"));

switch (standard) {
    case 1:
        alert(length * 0.1 + " метров");
        break;
    case 2:
        alert(length * 1000 + " метров");
        break;
    case 4:
        alert(length * 0.001 + " метров");
        break;
    case 5:
        alert(length * 0.01 + " метров");
        break;
    default:
        alert(length + " метров");
}

/* Задача № 3 */

let num = parseInt(prompt("Введите целое число от минус 999 до 999:"));
if (num >= -999 && num <= -100) {
    alert("трехзначное отрицательное число");
} else if (num >= -99 && num <= -10){
    alert("двузначное отрицательное число");
} else if (num >= -9 && num <= -1){
    alert("однозначное отрицательное число");
} else if(num === 0){
    alert("нулевое число");
} else if (num >=1 && num <= 9){
    alert("однозначное положительное число");
} else if (num >=10 && num <=99){
    alert("двузначное положительное число");
} else if (num >=100 && num <=999){
    alert("трехзначное положительное число");
} else {
    alert("Вы превысили заявленный диапазон");
}

/* Задача № 4 */

// Three Five

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i + " Three");
        continue;
    }
    if (i % 5 === 0) {
        console.log(i + " Five");
        continue;
    }
    console.log(i);

}

// ThreeFive

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " ThreeFive");
        continue;
    }

    console.log(i);
}

/* Задача № 5 */

let year = parseInt(prompt("Введите год:"));
if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
    alert("Год Високосный");
} else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0){
    alert("Год НЕ високосный");
} else if (year % 4 === 0 && year % 100 !== 0){
    alert("Год Високосный");
} else {
    alert("Год НЕ високосный");
}
