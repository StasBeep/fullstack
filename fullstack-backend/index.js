import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");

import { dataTest } from "./_dataTest.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

dataTest(app);

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from backend server'
	})
});