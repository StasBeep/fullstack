import { createRequire } from "module";
const require = createRequire(import.meta.url);

require('dotenv').config();

import { dataNewTodo } from "./src/api/newtodo.js";

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

dataNewTodo(app);

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from backend server'
	})
});