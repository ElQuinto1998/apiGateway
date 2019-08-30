const path = require('path');
let express = require('express');
const gateway = require('express-gateway');

let router = express.Router();

gateway().load(path.join(__dirname, 'config')).run();
