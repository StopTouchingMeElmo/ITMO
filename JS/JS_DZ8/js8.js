/* Задача № 1 */

/* Даны несколько div элементов на html.
По первому нажатию на каждый div 
он перекрашивается зеленым цветом, 
при повторном нажатии перекрашивается 
обратно и так далее каждый клик 
происходит чередование цвета.  */

let defaultElements = document.getElementById("defaultContainer");
defaultElements.addEventListener('click', recolorDefElements);

function recolorDefElements(e) {
    if (e.target.tagName === 'DIV') e.target.classList.toggle('green');
}

/* Задача № 2 */

/* Реализовать счётчик нажатий на 
кнопку: Дана кнопка внутри неё 
записана цифра. При клике на 
кнопку – её значение должно 
увеличиваться на единицу. */


let buttonCounter = document.getElementById("buttonCCounter");
buttonCounter.addEventListener('click', clickCount);

function clickCount(e) {
    if (e.target.tagName === "BUTTON") e.target.innerHTML = (e.target.innerHTML | 0) + 1;
}

// вариант 2

/* document.onclick = function (e) {
    let s = e.target;
    if (s.tagName === 'BUTTON') {
        s.innerHTML = (s.innerHTML | 0) + 1;
    }
}; */

/* Задача № 3 */

/* Реализовать возможность добавления комментариев. 
Комментарий вводится в textarea.
Комментарий добавляется по нажатию на кнопку Комментировать.
При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый), 
имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата), 
текст комментария (тот, что был введен в textarea). */

function changeContent() {
    document.getElementById('ava').appendChild(document.getElementById('pic'));
    document.getElementById('nick').innerHTML = document.getElementById('name').value;
    document.getElementById('comment').innerHTML = document.getElementById('textarea').value + '</br>' +'</br>' + new Date;
}

/* Задача № 4 */

/* Дан массив с объектами, где каждый объект 
описывает книгу: артикул, автор, название, описание.
Сформировать функцию, которой передаётся массив 
книг, и которая создаст и внесёт все 
необходимые html элементы, стили, и содержание 
для отображения всей информации о книгах в виду таблицы. */

let booksArr = [{
    article: "Book-123",
    author: "Author1",
    name: "Name1",
    description: "About1"
}, {
    article: "Book-124",
    author: "Author2",
    name: "Name2",
    description: "About2"
}, {
    article: "Book-125",
    author: "Author3",
    name: "Name3",
    description: "About3"
}, {
    article: "Book-126",
    author: "Author4",
    name: "Name4",
    description: "About4"
}, {
    article: "Book-127",
    author: "Author5",
    name: "Name5",
    description: "About5"
}];

let container = document.createElement('table');

let title = document.createElement('caption');
container.appendChild(title);
title.innerText = "Каталог книг";
title.style.cssText = `font-size: 20px;`;

let trHead = document.createElement('tr');
container.appendChild(trHead);

let thArt = document.createElement('th');
trHead.appendChild(thArt);
thArt.innerText = "Артикул";
let thAuth = document.createElement('th');
trHead.appendChild(thAuth);
thAuth.innerText = "Автор";
let thName = document.createElement('th');
trHead.appendChild(thName);
thName.innerText = "Название";
let thDesc = document.createElement('th');
trHead.appendChild(thDesc);
thDesc.innerText = "Описание";

function showBooks(booksArr) {

    booksArr.forEach(function (element) {

        let trContent = document.createElement('tr');
        container.appendChild(trContent);

        let tdArt = document.createElement('td');
        trContent.appendChild(tdArt);
        tdArt.innerText = element.article;
        let tdAuth = document.createElement('td');
        trContent.appendChild(tdAuth);
        tdAuth.innerText = element.author;
        let tdName = document.createElement('td');
        trContent.appendChild(tdName);
        tdName.innerText = element.name;
        let tdDescr = document.createElement('td');
        trContent.appendChild(tdDescr);
        tdDescr.innerText = element.description;

        container.style.cssText = `border: 2px solid black; background: grey;`;
        tdArt.style.cssText = `border: 1px solid black;`;
        tdAuth.style.cssText = `border: 1px solid black;`;
        tdName.style.cssText = `border: 1px solid black;`;
        tdDescr.style.cssText = `border: 1px solid black;`;

        booksContainer.appendChild(container);
    });

}
showBooks(booksArr);