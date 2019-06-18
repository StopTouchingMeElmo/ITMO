//слайдер

;
(function () {
    window.Slider = function Slider(id) {
        let sliderContainer = document.getElementById(id);
        let sliderElem = document.createElement('ul');
        sliderElem.classList.add("slider");
        sliderContainer.appendChild(sliderElem);

        let sliders = []; //массив li
        let currentSlide = 0; //номер текущего слайда

        this.add = function (imgPath) {
            let li = document.createElement('li');
            let image = document.createElement('img');
            image.setAttribute('src', imgPath);
            li.appendChild(image);
            sliderElem.appendChild(li);
            sliders.push(li);
        }
        this.run = function () {
            this.nextSlide();
            setInterval(this.nextSlide.bind(this), 6000);

            /* setInterval(() => {
                this.nextSlide();
            }, 4000); */
        }
        this.nextSlide = function () {
            //логика переключение слайдов
            sliders[currentSlide].classList.remove('active');
            currentSlide++;
            currentSlide = currentSlide < sliders.length ?
                currentSlide : 0;
            sliders[currentSlide].classList.add('active');
        }

    }
}());

let sliderNew = new Slider("slider1");
sliderNew.add("image/bunner2.jpg");
sliderNew.add("image/bunner4.jpg");
sliderNew.add("image/bunner1.jpg");
sliderNew.add("image/bunner3.jpg");
sliderNew.run();

//выпадающее меню

(function () {
    let toggle = document.getElementsByClassName('dropdown__toggle')[0];
    let dropdown = toggle.parentElement;
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-open');
    });
}());

// переход Кнопка Видео

let nav3 = document.getElementById('nav3');
let nav3Videos = document.getElementById('nav3-videos');
let switch2vid = document.getElementById('videos-button');
let vidButton = switch2vid.firstElementChild;

vidButton.onclick = function () {
    nav3.style.display = "none";
    nav3Videos.style.display = "grid";
};


//переход через target

/* # switch2vid: target~#container# nav3 {
    display: none;
}

# switch2vid: target~#container# nav3 - videos {
    display: grid;
} */

// переход Кнопка Заказать

let container = document.getElementById('container');
let ordersButton = document.getElementById('orders-button');

let verticalLeftMenu = document.getElementById('vertical-left-menu');
let verticalRightMenu = document.getElementById('vertical-right-menu');
let main1 = document.getElementById('main1');
let main2 = document.getElementById('main2');
let slider = document.getElementById('slider1');

ordersButton.onclick = function () {
    verticalLeftMenu.style.display = "none";
    verticalRightMenu.style.display = 'grid';
    main1.style.display = 'none';
    main2.style.display = 'grid';
    main3.style.display = "none";
    main4.style.display = 'none';
    main5.style.display = 'none';
    slider.style.display = 'none';
    container.style.cssText = `
    display: grid;
    grid-template-areas:
        "header header"
        "main2 vertical-right-menu"
        "footer footer";
    grid-template-columns: 1fr 340px;
    grid-template-rows: 140px 1fr 120px;
    grid-gap: 10px;

    background-color: #f0eef0;`;
};



/* #switch2orders:target~#container #vertical-left-menu {
    display: none;
}

#switch2orders:target~#container #vertical-right-menu {
    display: grid;

}

#switch2orders:target~#container #main1 {
    display: none;
}

#switch2orders:target~#container #main2 {
    display: grid;

}

#switch2orders:target~#container .slider {
    display: none;
}

#switch2orders:target~#container {
    display: grid;
    grid-template-areas:
        "header header"
        "main2 vertical-right-menu"
        "footer footer";
    grid-template-columns: 1fr 340px;
    grid-template-rows: 140px 1fr 120px;
    grid-gap: 10px;

    background-color: #f0eef0;
} */

// переход Кнопка Продать

let main3 = document.getElementById('main3');
let sellButton = document.getElementById('sell-button');

sellButton.onclick = function () {
    verticalLeftMenu.style.display = "none";
    verticalRightMenu.style.display = 'none';
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'grid';
    main4.style.display = 'none';
    main5.style.display = 'none';
    slider.style.display = 'none';
    container.style.cssText = `
    display: grid;
    grid-template-areas:
        "header"
        "main3"
        "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 140px 1fr 120px;
    grid-gap: 10px;

    background-color: #f0eef0;`;
};

//переход Кнопка Toys

let main4 = document.getElementById('main4');
let petsButton = document.getElementById('petsButton');

petsButton.onclick = function () {
    verticalLeftMenu.style.display = "grid";
    verticalRightMenu.style.display = 'none';
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
    main4.style.display = 'grid';
    main5.style.display = 'none';
    slider.style.display = 'none';
    container.style.cssText = `
    display: grid;
    grid-template-areas:
        "header header"
        "vertical-left-menu main4"
        "footer footer";
    grid-template-columns: 340px 1fr;
    grid-template-rows: 140px 1fr 120px;
    grid-gap: 10px;

    background-color: #f0eef0;`;
};

// переход Кнопка Cart

let main5 = document.getElementById('main5');
let buttonCart = document.getElementById('buttonCart');

buttonCart.onclick = function () {
    verticalLeftMenu.style.display = "grid";
    verticalRightMenu.style.display = 'none';
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
    main4.style.display = 'none';
    main5.style.display = 'grid';
    slider.style.display = 'none';
    container.style.cssText = `
    display: grid;
    grid-template-areas:
        "header header"
        "vertical-left-menu main5"
        "footer footer";
    grid-template-columns: 340px 1fr;
    grid-template-rows: 140px 1fr 120px;
    grid-gap: 10px;

    background-color: #f0eef0;`;
};

//Форма создания товара createProdForm

function Product(name, price, image, descr, phone, nick, email) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.descr = descr;
    this.phone = phone;
    this.nick = nick;
    this.email = email;
}

function Cart() {
    let productsArr = [];
    let amountOfProd = 0;
    let sumOfProd = 0;

    this.addProd = function (Product) {
        productsArr.unshift(Product);
        sumOfProd += Product.price;

        return productsArr;
    };

    this.sumReturn = function () {
        return sumOfProd;
    }
    this.amountReturn = function () {
        amountOfProd = productsArr.length;
        return amountOfProd;
    }

}
let previewList = document.getElementById('previewList');
let cartList = document.getElementById('cartList');

let allProducts = [];
let createProdButton = document.getElementById('createProdButton');
createProdButton.onclick = function (e) {
    e.preventDefault();

    let prod1 = new Product();
    let inputName = document.querySelector('input[name="name"]').value;
    prod1.name = inputName;
    let inputPrice = document.querySelector('input[name="price"]').value;
    prod1.price = inputPrice;
    let inputImage = document.querySelector('input[name="image"]').value;
    prod1.image = inputImage;
    let inputNick = document.querySelector('input[name="nick"]').value;
    prod1.nick = inputNick;
    let inputEmail = document.querySelector('input[name="email"]').value;
    prod1.email = inputEmail;
    let inputPhone = document.querySelector('input[name="phone"]').value;
    prod1.phone = inputPhone;
    let inputDescr = document.querySelector('textarea[name="descr"]').value;
    prod1.descr = inputDescr;

    allProducts.push(prod1);
    alert(`Ваш товар создан`);

    let prodBox = document.createElement('div');
    previewList.appendChild(prodBox);
    let namePlace = document.createElement('div');
    prodBox.appendChild(namePlace);
    let descrPlace = document.createElement('div');
    prodBox.appendChild(descrPlace);
    let pricePlace = document.createElement('div');
    prodBox.appendChild(pricePlace);
    let buttonPlace = document.createElement('button');
    prodBox.appendChild(buttonPlace);
    buttonPlace.type = 'submit';
    buttonPlace.textContent = 'В корзину';
    namePlace.textContent = inputName;
    descrPlace.textContent = inputDescr;
    pricePlace.textContent = inputPrice;

    previewList.style.cssText = `display: grid; grid-template-columns: 400px 400px; justify-content: center; grid-gap: 20px; width 300px; height: auto; margin-top: 20px`;
    prodBox.style.cssText = `display: grid; border: 3px solid black; padding: 10px; justify-content: center; 
    align-items: center; justify-items: center; background-color: white; border-radius: 15px; grid-gap: 20px;`;
    namePlace.style.cssText = `display: grid; font-size: x-large;`;
    pricePlace.style.cssText = `display: grid; font-size: x-large;`;

    buttonPlace.onclick = function (e) {
        e.preventDefault();

        let cart1 = new Cart();
        cart1.addProd(prod1);

        let orderBox = document.createElement('div');
        cartList.appendChild(orderBox);

        let namePlace1 = document.createElement('div');
        orderBox.appendChild(namePlace1);
        let pricePlace1 = document.createElement('div');
        orderBox.appendChild(pricePlace1);
        let buttonPlace1 = document.createElement('button');
        orderBox.appendChild(buttonPlace1);
        buttonPlace1.type = 'submit';
        buttonPlace1.textContent = 'Оформить заказ';
        namePlace1.textContent = inputName;
        pricePlace1.textContent = inputPrice;

        /* let sumPlace = document.createElement('div');
        orderBox.appendChild(sumPlace);
        sumPlace.textContent = cart1.sumReturn(); */

        cartList.style.cssText = `display: grid; grid-template-columns: 400px; justify-content: center; padding: 50px; width 300px; height: auto;`;
        orderBox.style.cssText = `display: grid; border: 3px solid black; padding: 10px; justify-content: center; 
        align-items: center; justify-items: center; background-color: white; border-radius: 15px; margin-bottom: 30px; grid-gap: 30px;`;
       /*  sumPlace.style.cssText = `display: grid; font-size: x-large;`; */
       namePlace1.style.cssText = `display: grid; font-size: x-large;`;
       pricePlace1.style.cssText = `display: grid; font-size: x-large;`;

       alert(`Товар добавлен в корзину`);

    }

};

console.log(allProducts);


/* console.log(`Сумма товара: ${cart1.sumReturn()}
Повторный вызов суммы товара: ${cart1.sumReturn()}
Количество товара: ${cart1.amountReturn()}`); */