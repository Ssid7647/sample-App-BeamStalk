const express = require('express')
const router = express.Router();
const translate = require('../translationModule/translate')
let path = require('path')
let generateUUID = require('../translationModule/uuidGenerator')
let getTranslation = require('../translationModule/translate')
let generateFile = require('../translationModule/generateXmlFromDB').generateFile





router.get('/', (req, res) => {
    console.log("sample output")
    res.send("ok done!!!");

})


//router.post('/',(res))
/*

router.post('/', async (req, res) => {
    try {
        let uuid = await generateUUID();
        res.send({
            "uuid": uuid
        })
        await getTranslation({ "body": req.body, "uuid": uuid })
        res.send("ok done!!!");
    } catch (error) {
        console.log(error)
        res.send(null)
    }
})
router.post('/getFile', async (req, res) => {
    try {
        await generateFile(req.body.uuid)
        res.send("ok done!!!");

    } catch (error) {
        res.send(error)
    }
})
*/


module.exports = router
