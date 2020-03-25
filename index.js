const path = require('path');
const express = require('express');
const port = 3000;

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/get_image', (req, res) => {


});


app.listen(port, () => {
  console.log(`Proxy Server is up and listening on port: ${port}`);
});