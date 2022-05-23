const express = require('express');
const needle = require('needle');

const IDS = require('../constants/constants');

const router = express.Router();

router.get('/req/', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/req?inn=${IDS[0]}&inn=${IDS[1]}&inn=${IDS[2]}&inn=${IDS[3]}&inn=${IDS[4]}&inn=${IDS[5]}&inn=${IDS[6]}&inn=${IDS[7]}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/branches/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/branches?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/owners/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/owners?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/contacts/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/contacts-official?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/courts/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/courts?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/executive/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/executive-lists?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/pledges/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/pledges?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/inspections/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/inspections/data?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/vacancies/:id', async (req, res) => {
	try {
		const apiRes = await needle(
			'get',
			`https://api.sbis.ru/vok-demo/vacancies/data?inn=${req.params.id}`
		);
		const data = apiRes.body;

		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
