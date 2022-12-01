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

app.get('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.query.sides), parseInt(req.query.dice), parseInt(req.query.rolls))).end();
})

app.post('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls))).end();
})

//Endpoint /app/roll/:sides/ that returns JSON for a default number of rolls and dice with whatever number of sides is specified in the parameter. 

app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), 2, 1)).end();
})

//Endpoint /app/roll/:sides/:dice/ that returns JSON for a default number of rolls with whatever number of sides and dice specified in the parameters. 

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1)).end();
})

//Endpoint /app/roll/:sides/:dice/:rolls/ that returns JSON for the specified number of rolls with whatever number of sides and dice specified in the parameters.

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls))).end();
})

//Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined.
app.get('*', (req, res) => {
    res.send('404 NOT FOUND').end()
})

app.listen(port);