const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});