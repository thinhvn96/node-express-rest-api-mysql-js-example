const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const NODE_ENV = process.env.NODE_ENV || 'development';
if (NODE_ENV === 'development') dotenv.config();
const config = require('config');
const PORT = config.get('PORT');
const apiRouter = require('./routers/api.router');
require('./databases/mysql.db');

const app = express();
app.use(express.json());
const whitelist = ['*'];
const corsOptions = {
    origin: function (origin = '*', callback) {
        if (whitelist.indexOf(origin) !== -1) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET, POST', 'PATCH'],
    allowedHeaders: ['Content-Type'],
};
app.use(NODE_ENV === 'development' ? cors() : cors(corsOptions));
app.get('/', (req, res) => res.send());
app.use('/api', apiRouter);
app.listen(PORT, '0.0.0.0', () => console.log(`Server is running in ${NODE_ENV} mode on port: ${PORT}`));
