const express = require('express');
const authRouter = require('./controllers/authController');
const userRouter = require('./controllers/userController');
const chatRouter = require('./controllers/chatController');

const app = express();

app.use(express.json());

app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);
app.use('/api/chat/', chatRouter);

module.exports = app;
