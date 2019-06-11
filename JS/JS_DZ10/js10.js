/* Задача № 1 */

/* Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара. */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Cart() {
    let productsArr = [];
    let amountOfProd = 0;
    let sumOfProd = 0;

    this.addProd = function (Product) {
        productsArr.unshift(Product);
        return productsArr;
    };

    this.sumReturn = function () {
        for (let i = 0; i < productsArr.length; i++) {
            sumOfProd += productsArr[i].price;

        }
        return sumOfProd;
    }

    this.amountReturn = function () {
        amountOfProd = productsArr.length;
        return amountOfProd;
    }

}

let prod1 = new Product('apple', 100);
let prod2 = new Product('book', 1000);
let prod3 = new Product('tea', 380);
let prod4 = new Product('flower', 50);

let cart1 = new Cart();
cart1.addProd(prod1);
cart1.addProd(prod2);
cart1.addProd(prod3);
cart1.addProd(prod4);

console.log(`Сумма товара: ${cart1.sumReturn()}
Количество товара: ${cart1.amountReturn()}`);

/* Задача № 2 */

/* Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.» */