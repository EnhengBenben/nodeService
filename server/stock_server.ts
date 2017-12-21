import * as express from 'express'

const app = express();

app.get('/', (request, response) => {
    response.send('这里是首页！');
});

app.get('/app/EGFR', (request, response) => {
    response.json(stocks);
});
app.get('/app/EGFR/:id', (request, response) => {
    response.json(stocks.find((stock) => stock.id == request.params.id));
});

const server = app.listen(9000, 'localhost', () =>{
    console.log('服务器已启动，端口：9000');
});

export class Stock {
    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {
    }
}

const stocks: Stock[] = [
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