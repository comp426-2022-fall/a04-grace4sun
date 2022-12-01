#!/usr/bin/env node

import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

//command line arguments
const args = minmist(process.arg.slice(2));
const port = args.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true}));



//Check endpoint at /app/ that returns 200 OK.
app.get('/app/', (req, res) => {
    res.send('200 OK').end();
})






//Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined.
app.get('*', (req, res) => {
    res.send('404 NOT FOUND').end()
})

app.listen(port);