const express = require('express');


const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');


app.get('/', (req, res) => {
    res.send('<h1>SUPREME EMPEROR</h1>');
});



app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);

app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`))
