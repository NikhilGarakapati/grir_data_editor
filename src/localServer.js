const express = require('express');
const app = express();
var data = require('./db.json');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/data/insert', (req, res) => {
    data.splice(0,0, req.body.value);
    return res.status(200).send('Row Inserted');
});

app.delete('/data/delete', (req, res) => {
    data = date.filter(x => x.id != req.body.key);
    return res.status(200).send('Row Deleted');
});


const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening to port ${port}`));


