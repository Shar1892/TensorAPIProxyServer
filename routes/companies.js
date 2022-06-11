const express = require('express');
const needle = require('needle');

const INN = require('../constants/constants');

const router = express.Router();

// Получаем основные данные по всем доступным компаниям
router.get('/req/', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/req?inn=${INN[0]}&inn=${INN[1]}&inn=${INN[2]}&inn=${INN[3]}&inn=${INN[4]}&inn=${INN[5]}&inn=${INN[6]}&inn=${INN[7]}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/business/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/cost-business?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по филиалам компании
router.get('/branches/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/branches?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по владельцам компании
router.get('/owners/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/owners?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по контактам компании
router.get('/contacts/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/contacts-official?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по судам компании
router.get('/courts/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/courts?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по исполнительным листам компании
router.get('/executive/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/executive-lists?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Получаем данные по залогам компании
router.get('/pledges/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/pledges?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по проверкам компании
router.get('/inspections/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/inspections/data?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Получаем данные по вакансиям компании
router.get('/vacancies/:inn', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/vacancies/data?inn=${req.params.inn}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
