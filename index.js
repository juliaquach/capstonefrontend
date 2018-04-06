const express = require('express')
const fs = require('fs')
const util = require('util')
const logger = require('morgan')
const bodyParser = require('body-parser')
const request = require('request')
const react = require('react')
const app = express()

var MongoClient = require('mongodb').MongoClient
var dbname = "mydb"
var url = "mongodb://localhost:27017/" + dbname;
var db

/*
 *  Establish connection to mongodb database and create collections (transactions, accounts and balances).
 */

MongoClient.connect(url, function(err, client) {
    if (err) return console.log(err);
    console.log("Database created!");
    
    db = client.db(dbname)
    db.createCollection("transactions", function(err, res) {
        if (err) throw err;
        console.log("Transaction collection created!");
    });
    db.createCollection("accounts", function(err, res) {
        if (err) throw err;
        console.log("Accounts collection created!");
    });
    db.createCollection("balances", function(err, res) {
        if (err) throw err;
        console.log("Balances collection created!");
    }); 
    db.createCollection("yodlee_transactions", function(err, res) {
        if (err) throw err;
        console.log("yodlee_transaction collection created!");
    });
 

    //client.close();
});

/*
 * Start server on port 3000.
 */

app.listen(3001, () => console.log('Server running on port 3000'));

/*
 * This route causes a request to go to the Macquarie server to fetch current list of transactions and insert it into the db.
 */

app.get('/', (req, res) => {

    res.send('WORKING');

})



