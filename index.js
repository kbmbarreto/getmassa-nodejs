const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .include('db.js')
    .include('models')
    .then('middlewares.js')
    .then('routes')
    .then('boot.js')
    .into(app);