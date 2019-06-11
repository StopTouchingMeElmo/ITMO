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

/* Задача № 4 */

/* Выбрать 10 незнакомых (которые не разбирались на занятиях) 
шаблонов объектов (классов) доступных в глобальной области и 
привести информацию в виде комментариев в коде для чего 
они используются. Информацию можно найти в документации 
(справочные системы по js, статьи по программированию и т.п.). */

/* 1. Объект Promise (обещание) используется для отложенных и асинхронных вычислений. Promise может находиться в трёх состояниях:
ожидание (pending): начальное состояние, не выполнено и не отклонено.
выполнено (fulfilled): операция завершена успешно.
отклонено (rejected): операция завершена с ошибкой.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

2. Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) 
и преобразования значений в JSON. Его нельзя вызвать как функцию или сконструировать как объект, 
и кроме своих двух методов он не содержит никакой интересной функциональности.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON

3. Объект Intl является пространством имён для API интернационализации ECMAScript, предосталяющим языко-зависимое сравнение строк, 
форматирование чисел и дат со временем. Конструкторы объектов Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl

4. Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map

5. Объект RangeError представляет ошибку, возникающую, когда значение не входит в множество или выходит за диапазон допустимых значений.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RangeError

6. Глобальная isFinite() функция определяет, является ли переданное значение конечным числом. Если необходимо, параметр сначала преобразуется в число.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isFinite

7. Объект Int8Array представляет типизированный массив 8-разрядных целых значений. Содержимое инициализируется значением 0. 
Создав экземпляр Int8Array, возможно получить доступ к элементам массива, используя методы объекта или стандартный синтаксис доступа к элементу массива 
по его индексу (с помощью скобочной нотации).
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Int8Array

8. Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

9. Объект URIError представляет ошибку, возникающую при неправильном использовании глобальных функций обработки URI.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/URIError

10. Объект WeakMap — коллекция пар ключ-значение. В качестве ключей могут быть использованы только объекты, а значения могут быть произвольных типов.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap */

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