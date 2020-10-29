
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require("morgan");

// set up port

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// add routes
const router = require('./routes/router');
app.use('/api', router);

// run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));