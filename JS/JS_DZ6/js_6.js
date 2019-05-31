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

let getter = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function ranNumber(min, max) {
  let arr = [];

  function randomise() {
    let num;
    while (arr.length < max) {
      num = getter(min, max);
      if (!arr.includes(num)) {
        arr.unshift(num);
        return num;
      }
    }
  }
  return randomise;
}

let vizov1 = ranNumber(1, 100);
for (let i = 0; i < 100; i++) {
  console.log(vizov1());
}

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