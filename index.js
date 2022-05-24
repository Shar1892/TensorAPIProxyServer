const express = require('express');
const cors = require('cors');

const companies = require('./routes/companies');

const {PORT = 4000} = process.env;

const app = express();

app.use(cors());

app.use('/', companies);

app.listen(PORT, () => {
	console.log(`Woop!! Woop!! ${PORT}`);
});
