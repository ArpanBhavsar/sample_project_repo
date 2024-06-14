const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
        res.send('Hello World!');
});

app.listen(PORT, () => {
        console.log(
          `Express server started listening on port ${PORT}. \nTo access this Node.js app open URL: http://localhost:${PORT}`
        );
      });
