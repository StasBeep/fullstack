import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');

const data = require('./data.json');

export const dataTest = (app) => {
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
            fs.writeFileSync('data.json', JSON.stringify(data, null, 4)); // JSON.stringify(data) - форматирует json-файл в строку
            res.json(data.dataTest[indexDataTest]);
        }
    });
}