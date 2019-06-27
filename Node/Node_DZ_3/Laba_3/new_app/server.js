const http = require('http');
const cp = require('child_process');
const url = require('url');

const child = cp.fork('./child.js');
let childReady = false;

function childSaidReady(status) {
    if (status === 'ready') {
        childReady = true;
        child.off('message', childSaidReady);
        console.log('Server ready');
    }
}
child.on('message', childSaidReady);

http.createServer((request, response) => {
    //код обработки http запроса
    let _get = url.parse(request.url, true).query; // Общий смысл строки понятен, но поэлементная запись (parse, true, query) - нет.
    console.log('Parametrs of request: ' + JSON.stringify(_get));
    if (!(_get.num1 && _get.num2)) {
        console.log('Bad Request');
        response.statusCode = 400;
        response.end();
        return;
    };
    if (!childReady) {
        console.log('Service Unavailable');
        response.statusCode = 503;
        response.end();
        return;
    };

    let expression = `${_get.num1}+${_get.num2}=`;

    function responseFromChild(data) {
        if (data.expression === expression) {  // в data передается obj от child? obj.expression === data.expression === expression 
                                               // Полагаю, что эта проверка сделана для того, чтобы Вернувшийся результат соответствовал Исходному запросу, который хранится в замыкании let expression 
                                               // Другими словами, чтобы тот, кто запросил 2+2 не получил ответ 6 потому, что кто-то запросил 3+3 ранее.
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(`<h1>${data.result}</h1>`);
            response.end();
            child.off('message', responseFromChild);
        }
    }
    child.on('message', responseFromChild);

    child.send({
        expression // непонятно почему переменная записана в краткой форме массива? По факту это obj со свойством expression со значением строка `${_get.num1}+${_get.num2}=` из let expression. Или не так?
                   // возможно, только при такой форме записи можно сделать свойство объекта одновременно еще и змыканием. Не знаю.
    });


}).listen(8080, () => {
    console.log('Server run in 8080 port!');
});

/* Убрал 9+5=14 получил 9+5=10
Убрал 7+7=14 получил 7+7=16 
Убрал 4+8=12 получил 4+8=13

Фокус с правильным ответом работает, только когда удаляешь равенство, стоящее первым в паре зеркальных. Например, последовательно идут 5+6=11 и 6+5=11.
Тогда, при удалении 5+6=11, перезагрузке сервера и зпросе его в url, он даст верный ответ, ориентируясь на 6+5=11.

В других комбинациях никакого искусственного интеллекта у меня не получилось. Не знаю, может неправильно что-то понял.

*/