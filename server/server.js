const express = require('express');
const { getPayload } = require('./dynamo');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/payload', async(req,  res) => {
    try {
        const payload = await getPayload();
        res.json(payload);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' })
    }
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Listening on port", port)
})