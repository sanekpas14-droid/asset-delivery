const express = require('express');
const app = express();

const MODULE_ID = "72094513575873";

app.get('/', (req, res) => {
    res.send(MODULE_ID);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(Сервер запущен на порту ${port});
});
