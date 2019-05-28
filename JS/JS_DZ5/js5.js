/* Задача № 1 */

function compareMassives(mass1, mass2) {
    if (Array.isArray(mass1) === false || Array.isArray(mass2) === false)
        return false;
    if (mass1.length !== mass2.length)
        return false;
    for (let i = 0; i < mass1.length; i++) {
        if (mass1[i] !== mass2[i])
            return false;
    }

    return true;
}

let m1 = [1, 2, 3, 4, 5];

let m2 = [1, 2, 3, 4];
let m3 = [1, 2, 5, 4, 5];
let m4 = 'строкастрока';
let m5 = 'stringstring';
let m6 = [1, 2, 3, 4, 5];


console.log(compareMassives(m1, m6)); // массивы равны
console.log(compareMassives(m1, m3)); // массивы с разным содержанием
console.log(compareMassives(m1, m2)); // массивы разной длины
console.log(compareMassives(m1, m4)); // массив со строкой
console.log(compareMassives(m4, m5)); // две строки

/* Задача № 2 */

function range(begin, stop, step = 1) {
    let arr = [];
    for (let i = begin; i <= stop; i += step)
        arr.push(i);
    return arr;
}
let result = range(2, 8, 3);
console.log(result);

/* Задача № 3 */

let student = {
    name: 'Bill',
    surname: 'Gates',
    age: 63,
    interests: ['busuness', 'investor', 'author', 'philanthropist'],
    study: 'Harvard University'
};

function printStudent({
    name,
    surname,
    age,
    interests,
    study
}) {
    console.log(`
    Name: ${name}
    Surname: ${surname}
    Age: ${age}
    Interests: ${interests}
    Education: ${study}`);
    return;
}
printStudent(student);

/* Задача № 4 */ // Возможно ли эту задачу решить через regExp в принципе?

/* function randomSymbol(min, max) {
    let rand = min + Math.random() * (max - min);
    rand = Math.floor(rand);
    return rand;
}
let glasnie = "аоиеёэыуюя"; //10 аоиеёэыуюя
let soglasnie = "бвгджзйклмнпрстфхцчшщьъ"; //23 бвгджзйклмнпрстфхцчшщьъ

let randomGlasnie = () => glasnie[randomSymbol(0, glasnie.length)];
let randomSoglasnie = () => glasnie[randomSymbol(0, soglasnie.length)];
let randomWordLength = randomSymbol(3, 6);

function word() {
    let myWord = "";
    let regExp1 = /randomGlasnie(){2}/g;
    let regExp2 = /randomSoglasnie(){2}/g;
    for (let i = 0; i < randomWordLength; i++)
        myWord += (randomGlasnie() && randomSoglasnie()) + (randomGlasnie() && randomSoglasnie());
    if (!regExp1.test(myWord) && !regExp2.test(myWord))
        return (myWord);
}
console.log(word()); */