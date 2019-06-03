/* Задача № 1 */

/* Создать функцию которая выводит время 
в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом
часы, минуты и секунды отобразить разными цветами. */

clock.style.width = "900px";
clock.style.margin = "150px";
clock.style.textAlign = "center";
clock.style.fontSize = "150px";

let span1 = document.createElement("span");
span1.style.color = "orange";
let span2 = document.createElement("span");
span2.style.color = "green";
let span3 = document.createElement("span");
span3.style.color = "red";

clock.appendChild(span1);
clock.appendChild(span2);
clock.appendChild(span3);

function displayClock() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hrs = (hrs < 10) ? '0' + hrs : hrs;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    span1.innerHTML = hrs + ":";
    span2.innerHTML = min + ":";
    span3.innerHTML = sec;

}

setInterval(displayClock, 1000);

/* Задача № 2 */

/* Дан массив с объектами, где каждый объект 
описывает товар: фото, артикул, описание и т.п.
Сформировать функцию, которой передаётся массив 
товаров, и которая создаст и внесёт все 
необходимые html элементы, стили, и содержание 
для отображения всей информации о товарах. */

let goodsArr = [{
    article: "Good 123",
    image: "image/good.jpg",
    description: "For something"
}, {
    article: "Good 223",
    image: "image/good.jpg",
    description: "For something 2"
}, {
    article: "Good 333",
    image: "image/good.jpg",
    description: "For something 3"
}];

function showGoods(goodsArr) {
    goodsArr.forEach(function (element) {
        let container = document.createElement('div');
        let art = document.createElement('h3');
        let im = document.createElement('img');
        let des = document.createElement('span');
        art.innerText = element.article;
        im.src = element.image;
        des.innerText = element.description;
        container.appendChild(art);
        container.appendChild(im);
        container.appendChild(des);

        container.style.cssText = `display: grid; grid-template-rows: 20px 200px 20px; align-items: center; justify-items: left; justify-content: center; padding: 20px;`;
        im.style.cssText = `width: auto; height: 150px;`;

        goods.appendChild(container);
    });

}
showGoods(goodsArr);

/* Задача №3 */

/* Создать светофор (красный, желтый, 
зелёный). Переключать цвет у светофора 
через каждые 2 сек сверху вниз и снизу вверх. */


let light1 = document.getElementById('red');
let light2 = document.getElementById('yellow');
let light3 = document.getElementById('green');

light1.style.background = "black";
light2.style.background = "black";
light3.style.background = "black";

function switcher() {
    setTimeout("light1.style.background='red';light2.style.background='black';light3.style.background='black';", 1000 * 0);
    setTimeout("light2.style.background='yellow';light1.style.background='black';light3.style.background='black';", 1000 * 2);
    setTimeout("light3.style.background='green';light1.style.background='black';light2.style.background='black';", 1000 * 4);
    setTimeout("light1.style.background='black';light2.style.background='yellow';light3.style.background='black';", 1000 * 6);
}

switcher();
setInterval(switcher, 1000 * 8);