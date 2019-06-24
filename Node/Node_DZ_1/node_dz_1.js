/* Задача № 1 */

/* Требуется реализовать декоратор с параметрами pause, 
который откладывает выполнение функции на указанное 
количество секунд. Пример использования:
function func() {
	console.log('Функция выполниться с задержкой в 2 секунды!');
}
let paused = pause(func, 2);
paused(); */

function pause(function1, seconds) {
    function wrapper() {
        console.log('Начало выполнения');
        setTimeout(() => function1.call(this, arguments), seconds * 1000);
    }
    return wrapper;
};

function func() {
    console.log('Функция выполнилась с задержкой в 5 секунд!');
}
let paused = pause(func, 5);
paused();

/* Задача № 2 */

/* Требуется реализовать декоратор с параметрами returnObject, 
который в случае, если функция возвращает массив, подменяет 
его объектом. Имена задаются в параметрах декоратора. Декоратор 
универсальный, количество имен переменное.
Пример использования №1:
function func(){
	return [1, 2]
}
let func_decoreted = return_object(func, 'one', 'two');
let r = func_decoreted();
console.log(r.one); // 1
console.log(r.two); //2
Пример использования №2:
function func(){
	return ['Python', 'is', 'programming language']
}
let r = return_object (func, 'a', 'b', 'c')();
console.log(r.c) // 'programming language' */

function return_object(func1, ...ar) {
    return function () {
        let obj = {};
        let arr = func1.call(this, arguments);
        if (Array.isArray(arr)) {
            for (let i = 0; i < ar.length; i++) {
                let key = ar[i];
                obj[key] = arr[i];
            }
        }
        return obj;
    }
}

function func2() {
    return [1, 2];
}
let func_decorated = return_object(func2, 'one', 'two');
let r = func_decorated();
console.log(r.one); // 1
console.log(r.two); //2

/* Задача № 3 */

/* Смотрите папку 404 */