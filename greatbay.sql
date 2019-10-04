DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE table bids_table (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY;
  item VARCHAR(60) NOT NULL,
  category VARCHAR(60) NOT NULL,
  current_bid INTEGER,
  minimum_bid INTEGER NOT NULL
);

INSERT INTO bids_table (item, current_bid, minimum_bid) VALUES ('hot dog stand', 1200, 2000), ('lock of gordon hair', 5, 10000), ("spongebob's pineapple house", 24, 36);

SELECT * FROM bids_table;