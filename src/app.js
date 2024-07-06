const express = require('express');
const app = express();
require('dotenv').config();

// rotas da aplicação
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

app.set('port', process.env.PORT);
app.use(express.json());

// habilitar utilização em nossa aplicação
app.use('/api', usersRouter);
app.use('/api', loginRouter);

module.exports = app;