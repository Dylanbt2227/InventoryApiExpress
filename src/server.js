const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const inventoryRoutes = require('./routes/inventory');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));


app.use('/', inventoryRoutes)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});