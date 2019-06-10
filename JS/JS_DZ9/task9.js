/* Задание № 1 */

/* Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива. */

//Массив с выводом результатов

let array1 = [1, 2, 3, 4, 5, 6];

console.log(`Минимальный элемент: ${libraryForArray.minEl(array1)}`);
console.log(`Максимальный элемент: ${libraryForArray.maxEl(array1)}`);
console.log(`Среднее арифментическое: ${libraryForArray.midEl(array1)}`);
console.log(`Копия массива: ${libraryForArray.copyArray(array1)}`);

/* Задание № 2 */

/* Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции. */

//Объект описывающий точки одной линии

let line1 = {
    x: [],
    y: [],
    type: 'scatter'
};

//Функция для расчёта y = f(x)

function calcY(x) {
    let y;
    if (x >= 1) {
        y = 5 / x;
    } else {
        y = x * x - 4 * x;
    }
    return y;
}

for (let i = -5; i <= 5; i += 0.01) {
    line1.x.push(i);
    line1.y.push(calcY(i));
}

let data = [line1];

let layout = {
    title: 'Кривая Фредди — Крюгера',
    xaxis: {
        title: 'Безнаказанность',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'Количество жертв',
        showline: false
    }
};

Plotly.newPlot('chart', data, layout);

/* Задача № 3 */

//смотри папку Unit_test

/* Подключить стороннюю библиотеку для юнит тестирования.
Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x). */

/* Задача № 4 */

/* Написать функцию генерации поля n x n (значение n - аргумент функции), 
в ячейки рандомно спрятать несколько призов. 
Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз 
(иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет. 
Количество оставшихся попыток выводим рядом с игровым полем. */

let gift = {
    dog: "DOG",
    cat: "CAT",
    rat: "RAT",
    loser1: "Try again!",
    loser2: "Try again!",
    loser3: "Try again!",
    loser4: "Try again!"
};

function randomise() {
    let resArray = Object.values(gift);
    let res = Math.floor(Math.random() * resArray.length);
    return resArray[res];
}

let counter = document.getElementById('counter');

let num = 3;

function fieldCreation(n) {
    let lotteryField = document.getElementById('lottery-field');
    for (let i = 0; i < n; i++) {
        let ticketContainer = document.createElement('div');
        ticketContainer.style.backgroundColor = "red";
        ticketContainer.classList.add('tC');
        lotteryField.appendChild(ticketContainer);
        ticketContainer.onclick = function () {
            if (num > 0) {
                ticketContainer.textContent = randomise();
                ticketContainer.style.backgroundColor = "green";
                num--;
                counter.textContent = num;
            }
        }
    }
}

fieldCreation(7);