
/* Задание № 1 */

/* Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива. */

//Подключаемая библиотека для работы с массивом

let libraryForArray = (function () {
    return {
        minEl: function (array1) {
            let tmpArr = array1.slice();
            tmpArr = tmpArr.sort(function (a, b) {
                return a - b;
            });
            return tmpArr[0];
        },
        maxEl: function (array1) {
            let tmpArr = array1.slice();
            tmpArr = tmpArr.sort(function (a, b) {
                return b - a;
            });
            return tmpArr[0];
        },
        midEl: function (array1) {
            let tmpArr = array1.slice();
            let sum = 0;
            for (let i = 0; i < tmpArr.length; i++) {
                sum += tmpArr[i];
            }
            return sum / tmpArr.length;

        },
        copyArray: function (array1) {
            return array1.slice();
        }
    }

}());