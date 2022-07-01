const express = require('express');
require('dotenv').config()
const app = express();
const generateUUID=require('./translationModule/uuidGenerator')
const getTranslation=require('./translationModule/translate')
const generateFile=require('./translationModule/generateXmlFromDB').generateFile






const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', async (req, res) => {
    try {
        let uuid = await generateUUID();
        res.status(200).send({
            "uuid": uuid
        })
        await getTranslation({ "body": req.body, "uuid": uuid })
        res.status(200).send("ok done!!!");
    } catch (error) {
        console.log(error)
        res.send(null)
    }
})
app.post('/getFile', async (req, res) => {
    try {
        await generateFile(req.body.uuid)
        res.status(200).send("ok done!!!");

    } catch (error) {
        res.send(error)
    }
})
app.listen(port);
console.log(`App running on http://localhost:${port}`);
