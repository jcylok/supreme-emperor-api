const express = require('express');


const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('<h1>SUPREME EMPEROR</h1>');
});





app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`))
