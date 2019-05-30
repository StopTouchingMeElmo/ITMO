/* Задача № 1 */

/* let a = {
    name: 'static',
    count: 0
}

function foo()
console.log(foo(a, 'count', 10); */

/* Задача № 2 */

/* Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией. */

// Специально закомментил вывод по одному числу, чтобы показать следующее: в некоторых строках не добавляет новое число, но показывает последнее добавленное, 
// потом опять начинает добавлять неповторяющиеся цифры.
// Если выводить по одному, то можно подумать, что он добавляет повторения, но нет, он показывает последнее добавленное. Почему так. Не знаю.


let getter = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function ranNumber(min, max) {
  let arr = [];

  function randomise() {

    while (arr.length < max) {
      let num = getter(min, max);
      if (!arr.includes(num)) {
        arr.unshift(num);
      }
      /*  return arr; */
      console.log(`${arr}`);

    }
  }
  return randomise();
}
let vizov1 = ranNumber(1, 100);
console.log(vizov1);
/* let vizov2 = ranNumber(1, 100);
console.log(vizov2);
let vizov3 = ranNumber(1, 100);
console.log(vizov3);
let vizov4 = ranNumber(1, 100);
console.log(vizov4);
let vizov5 = ranNumber(1, 100);
console.log(vizov5);
let vizov6 = ranNumber(1, 100);
console.log(vizov6);
let vizov7 = ranNumber(1, 100);
console.log(vizov7);
let vizov8 = ranNumber(1, 100);
console.log(vizov8);
let vizov9 = ranNumber(1, 100);
console.log(vizov9);
let vizov10 = ranNumber(1, 100);
console.log(vizov10);
let vizov11 = ranNumber(1, 100);
console.log(vizov11);
let vizov12 = ranNumber(1, 100);
console.log(vizov12);
let vizov13 = ranNumber(1, 100);
console.log(vizov13);
let vizov14 = ranNumber(1, 100);
console.log(vizov14);
let vizov15 = ranNumber(1, 100);
console.log(vizov15);
let vizov16 = ranNumber(1, 100);
console.log(vizov16);
let vizov17 = ranNumber(1, 100);
console.log(vizov17);
let vizov18 = ranNumber(1, 100);
console.log(vizov18);
let vizov19 = ranNumber(1, 100);
console.log(vizov19);
let vizov20 = ranNumber(1, 100);
console.log(vizov20); */

/* Задача № 3 */

/* Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод объекта выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО. */

let student = {
  name: 'Bill',
  surname: 'Gates',
  age: 63,
  interests: ['busuness', 'investor', 'author', 'philanthropist'],
  study: 'Harvard University',
  print: function () {
    console.log(`
    Name: ${this.name}
    Surname: ${this.surname}
    Age: ${this.age}
    Interests: ${this.interests}
    Education: ${this.study}`);
  }
};

student.print();

/* Задача № 4 */

/* Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1 */

function factorial(n) {
  if (n <= 0) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
};
let n = 8;
console.log(factorial(n));

/* Задача № 5 */

/* Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},]; */

let arr = [{
    'price': 10,
    'count': 2
  }, {
    'price': 5,
    'count': 5
  },
  {
    'price': 8,
    'count': 5
  }, {
    'price': 12,
    'count': 4
  }, {
    'price': 8,
    'count': 4
  },
];

function fn(num1, num2) {
  return num1.price - num2.price;
}

arr.sort(fn);
console.log(arr);