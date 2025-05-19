const express = require("express");

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


let data = {
	id: 1,
	name: "John Doe",
	age: 30
};

app.get('/api/data/:id', (req, res) => {
	const idDataReq = req.params.id
	console.log('start request: ' + idDataReq);

	if (data.id !== parseInt(idDataReq)) {
		console.log('No id: ' + idDataReq);
		return res.status(404).send("Data not found");
	} else {
		res.json(data);
	}
});

// PUT route for updating data based on ID
app.put('/api/data/:id', (req, res) => {
	const id = req.params.id;
	const updatedData = req.body; //! Не сработает без - app.use(express.json());

	// Validate data existence before update
	if (data.id !== parseInt(id)) {
		return res.status(404).send("Data not found");
	}

	data = { ...data, ...updatedData };

	res.json(data);
});