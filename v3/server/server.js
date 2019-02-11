const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose');

const searchesController = require('./controllers/SearchesController');

const app = express();
const apiVersion = '/v3';

app.use(bodyParser.json());

////////*** Routes  ***/////////

app.post(apiVersion + '/buscar', searchesController.searchAvailableRooms);

////////*** End Routes  ***/////////

app.listen(3000, () => {
	console.log('Listening port 3000');
});