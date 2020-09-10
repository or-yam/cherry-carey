const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./Routes/Api');

const PORT = process.env.PORT;
const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
