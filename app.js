require('dotenv').config();

var keys = require('./keys.js');
var mysql = require('mysql');
var inquirer = require('inquirer');
var passwerd = keys.key

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: passwerd,
  database: 'greatbay_db'
})

connection.connect(function(err){
  if(err) throw err;
  console.log('connected as id ' + connection.threadId + "\n");
  createBid();
});

inquirer.prompt(
  {
    type: 'list',
    message: 'Would you like to POST an auction or BID on an auction',
    name: 'action',
    choices: ['POST', 'BET']
  },
  {
    type: 'input',
    message: 'What category would you like to place your auction in?',
    name: 'fuku'
  }
).then(function(response){
  console.log(response);
})

function createBid(){
  console.log('Starting bid for new item...\n');
  var query = connection.query(
    'INSERT INTO bids_table SET ?',
    {
      item: "Martha Stewart's prison wallet",
      current_bid: 50000,
      minimum_bid: 100000
    },
    function(err, res){
      if(err) throw err;
      console.log(res.affectedRows + "Auction Started!\n");
      updateAuction();
    }
  )

  console.log(query.sql);
}

function updateAuction(){
  console.log('Updating all auctions...');
  var query = connection.query(
    "UPDATE bids_table SET ? WHERE ?",
    [
      {
        current_bid: 'nap'
      },
      {
        item: 'gordon bath water'
      }
    ]
  )
}