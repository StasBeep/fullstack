const express = require("express");
const data = require('./data.json');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from backend server'
	})
});

app.get('/api/data/:id', (req, res) => {
	const idDataReq = req.params.id;
	console.log('start request id: ' + idDataReq);

	const dataResponse = data.dataTest.find((item) => item.id === parseInt(idDataReq));

	if (!dataResponse) {
		console.log('No id: ' + idDataReq);
		return res.status(404).send("Data not found");
	} else {
		res.json(dataResponse);
	}
});

app.put('/api/data/:id', (req, res) => {
	console.log('change data for id: ' + req.params.id);
	const idDataReq = req.params.id;
	const updatedData = req.body; //! Не сработает без - app.use(express.json());

	let indexDataTest = data.dataTest.findIndex((item) => item.id === parseInt(idDataReq));

	console.log(indexDataTest);

	if (indexDataTest === -1) {
		console.log('No id: ' + idDataReq);
		return res.status(404).send("Data not found");
	} else {
		data.dataTest[indexDataTest] = updatedData;
		console.log("completed change data");
		res.json(data.dataTest[indexDataTest]);
	}
});