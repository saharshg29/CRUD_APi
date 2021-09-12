const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./controller/controller')

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)

app.listen(3000)