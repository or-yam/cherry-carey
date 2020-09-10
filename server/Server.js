const express = require('express');
const bodyParser = require('body-parser');
const api = require('./Routes/Api');

const PORT = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
