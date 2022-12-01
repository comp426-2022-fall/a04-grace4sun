#!/usr/bin/env node

import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

//command line arguments
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true}));



//Check endpoint at /app/ that returns 200 OK.
app.get('/app/', (req, res) => {
    res.send('200 OK').end();
})


//Endpoint /app/roll/ that returns JSON for a default roll of two six-sided dice one time.
app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1)).end();
})


//Endpoint /app/roll/ should ALSO accept either JSON or URLEncoded data body for sides, dice, and rolls. 
//Example URLEncoded string for data body: ?sides=20&dice=4&rolls=3. Example JSON data body: {"sides":20,"dice":4,"rolls":3}. 
//The format of the resulting JSON should look like: {"sides":20,"dice":4,"rolls":3,"results":[19,3,60]}.

app.get('/app/roll/', (req, res) => {
    res.send(roll(req.query.sides, req.query.dice, req.query.rolls)).end();
})

app.post('/app/roll/', (req, res) => {
    res.send(roll(req.body.sides, req.body.dice, req.body.rolls)).end();
})

//Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined.
app.get('*', (req, res) => {
    res.send('404 NOT FOUND').end()
})

app.listen(port);