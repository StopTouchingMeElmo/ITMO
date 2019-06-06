/* Задача № 3 */

/* Подключить стороннюю библиотеку для юнит тестирования.
Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x). */

function calc_y(x) {

    y = 1 / x + Math.sqrt(x);

    return y;
}

describe("Тестирование математической функции", function () {
    let msg = "Позитивный тест: x=0, y=Infinity";
    it(msg, function () { 
        let rez = calc_y(0);
        expect(rez).toBe(Infinity);
    });
    let msg2 = "Негативный тест: x=-1, y=NaN";
    it(msg2, function () {
        let rez = calc_y(-1);
        expect(rez).toBeNaN();
    });
    let msg3 = "Позитивный тест 2: x=4, y=2.25";
    it(msg3, function () {
        let rez = calc_y(4);
        expect(rez).toBe(2.25);
    });
});


/* let x = -1;
let a = 1 / x + Math.sqrt(x);
console.log(`Результат: ${a}`);
// Результат: NaN*/