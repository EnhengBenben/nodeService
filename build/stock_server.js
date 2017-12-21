"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) {
    response.send('这里是首页！');
});
app.get('/app/EGFR', function (request, response) {
    response.json(stocks);
});
var server = app.listen(9000, 'localhost', function () {
    console.log('服务器已启动，端口：9000');
});
var Stock = (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '第一支股票', 100, 3, 'desc', ['IT', '互联网']),
    new Stock(2, '第二支股票', 200, 2, 'desc', ['IT', '互联网']),
    new Stock(3, '第三支股票', 130, 1, 'desc', ['IT', '互联网']),
    new Stock(4, '第四支股票', 150, 4, 'desc', ['IT', '互联网']),
    new Stock(5, '第五支股票', 170, 4, 'desc', ['IT', '互联网']),
    new Stock(6, '第六支股票', 190, 3, 'desc', ['IT', '互联网']),
    new Stock(7, '第七支股票', 290, 5, 'desc', ['IT', '互联网']),
    new Stock(8, '第八支股票', 300, 1, 'desc', ['IT', '互联网']),
    new Stock(9, '第九支股票', 180, 2, 'desc', ['IT', '互联网']),
];
//# sourceMappingURL=stock_server.js.map