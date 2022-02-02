require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

