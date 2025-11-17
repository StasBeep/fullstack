import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { updateJsonFile } from "../helpers/_updateJsonFiles.js";

const data = require('../../data/data.json');

export const dataNewTodo = (app) => {
    app.get("/api/todo/all", (req, res) => {
        return res.json(data.dataTest);
    });

    app.post("/api/todo/", (req, res) => {
        console.log('create...');

        const newIdElement = data.dataTest.length + 1;

        const dataLocal = {
            id: newIdElement,
            message: req.body.message,
            count: req.body.count,
            name: req.body.name,
            checked: req.body.checked
        }

        data.dataTest.push(dataLocal);

        updateJsonFile('data.json', data);

        console.log('created completed');

        return res.json(data.dataTest[data.dataTest.length - 1]);
    })
}
