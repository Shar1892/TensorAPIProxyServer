const express = require('express');
//const proxy = require('express-http-proxy');
const cors = require('cors');
//const axios = require('axios');

const companies = require('./routes/companies');

// Слушаем 3000 порт
const {PORT = 4000} = process.env;

/*const app = express();

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
	})
);

//app.get('/', proxy('https://api.sbis.ru/vok-demo/req?inn=7605016030'));*/

const app = express();

app.use(cors());

app.use('/', companies);

/*app.get('/', (req, res) => {
	res.json({success: true});
});*/

//app.listen(3000);

app.listen(PORT, () => {
	// Если всё работает, консоль покажет, какой порт приложение слушает
	console.log(`Woop!! Woop!! ${PORT}`);
});
