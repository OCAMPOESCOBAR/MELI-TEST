const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require('cors');
const routerApi = require('./routes');
const { boomErrorFormat, logs, sendError } = require('./middleware/errorHandler');

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));

routerApi(app);

app.use(logs);
app.use(boomErrorFormat);
app.use(sendError);

module.exports = app;