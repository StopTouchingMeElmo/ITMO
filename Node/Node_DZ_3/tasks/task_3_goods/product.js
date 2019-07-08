  
/* ДЗ №3 Задача № 3 */  
/* 3***. Задание на HTML, CSS, JS (Ajax) и NodeJS: Разработать сервер, 
который умеет отдавать запрашиваемые html страницы (а может и JSON данные). 
Дана страница с товарами product.html. На ней по загрузке расположено 
12 товаров по 3 в ряд. Сделайте так, чтобы при прокрутке страницы до 
самого низа ajax-ом подгружалось еще 12 товаров. */
  
  $(document).ready(function () {
      $.getJSON("./product.json", function (goods) {
          let div = '';
          for (key in goods) {
              div += ("<div class = 'good'>" + "<p>" + "<strong>" + "id" + ": " + goods[key].id + "</strong>" + "</p>" + "<img src='./goods.jpg'>" + "<p>" + "title" + ": " + goods[key].title + "</p>" + "<p>" + "desc" + ": " + goods[key].desc + "</p>" + "</div>");
          };
          $("#container").append(div);
      });
  });


  $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
          //можно поставить минимальное значение, например, 0,01, но тогда
          //будет заметно подергивание при подгрузке товаров
          $.getJSON("./product.json", function (goods) {
              let div = '';
              for (key in goods) {
                  div += ("<div class = 'good'>" + "<p>" + "<strong>" + "id" + ": " + goods[key].id + "</strong>" + "</p>" + "<img src='./goods.jpg'>" + "<p>" + "title" + ": " + goods[key].title + "</p>" + "<p>" + "desc" + ": " + goods[key].desc + "</p>" + "</div>");
              };
              $("#container").append(div);
          });
      }
  });