const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = '';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log(`Listening on port ${port}`));
