/* Задача 1 */
/* Генератор случайных паролей. Требуется реализовать генератор
(function*) случайных паролей указанной длины. В пароле можно 
использовать любые символы в верхнем и нижнем регистре. 
Например: password_generator(16), вернет случайный пароль 
длиной 16 символов. */


// Не любые 

/* function password_generator(length) {
    let pass = "";
    let dic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    for (let i = 0; i < length; i++) {
        pass += dic.charAt(Math.floor(Math.random() * dic.length));

    }
    console.log(pass);
}

password_generator(8); */

// Любые

/* function password_generator(length) {
    let pass = "";
    let randomizer = (min, max) => Math.floor(Math.random() * (max - min) + min);
    for (let i = 0; i < length; i++) {
        pass += String.fromCharCode(randomizer(0, 1114111));
    }
    console.log(`Ваш пароль, составленный из ЛЮБЫХ символов верхнего и нижнего регистра Юникода: ${pass} 
Запомните его и никому не показывайте =)`);
}

password_generator(50); */

// Через функцию-генератор

/* function* password_generator(length) {
    let pass = '';

    let randomizer = (min, max) => Math.floor(Math.random() * (max - min) + min);
    for (let i = 0; i < length; i++) {
        yield pass += String.fromCharCode(randomizer(0, 1114111));
    }

    console.log(`Ваш пароль, составленный из ЛЮБЫХ символов верхнего и нижнего регистра Юникода: ${pass} 
Запомните его и никому не показывайте =)`);
};

let password = password_generator(5);

for (let value of password) {
    console.log(value);
} */

//Через функцию-генератор v 2.0

function* password_generator(length) {

    while (true) {
        let pass = '';
        let randomizer = (min, max) => Math.floor(Math.random() * (max - min) + min);
        for (let i = 0; i < length; i++) {
            pass += String.fromCharCode(randomizer(0, 1114111));
        }

        console.log(`Ваш пароль, составленный из ЛЮБЫХ символов верхнего и нижнего регистра Юникода: ${pass} 
Запомните его и никому не показывайте =)`);
        yield;
    };
};

let password = password_generator(10);
password.next();
password.next();
password.next();