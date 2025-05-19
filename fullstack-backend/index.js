const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

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

app.get('/api/data/1', (req, res) => {
	console.log(data);
	res.json(data);
});

// PUT route for updating data based on ID
app.put('/api/data/:id', (req, res) => {
	const id = req.params.id;
	const updatedData = req.body;

	// Validate data existence before update
	if (data.id !== parseInt(id)) {
		return res.status(404).send("Data not found");
	}

	// Update data properties using object spread syntax
	data = { ...data, ...updatedData };

	res.json(data);

	console.log(data);
});