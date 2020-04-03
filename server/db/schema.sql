DROP DATABASE IF EXISTS jstatsdb;

CREATE DATABASE jstatsdb;

USE jstatsdb;

CREATE TABLE players (
  id serial PRIMARY KEY,
  personId INT(7) NOT NULL,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(20) NOT NULL,
  jersey INT(2) NOT NULL,
  pos VARCHAR(3) NOT NULL,
  heightFeet INT(1) NOT NULL,
  heightInches INT(2) NOT NULL,
  weightPounds INT(3) NOT NULL,
  birthDate DATE(10) NOT NULL,
  drafRound INT(1),
  draftPick INT(2),
  draftYear INT(4),
  yearsPro INT(2) NOT NULL,
  tpp DECIMAL(2,1) NOT NULL,
  ftp DECIMAL(2,1) NOT NULL,
  fgp DECIMAL(2,1) NOT NULL,
  ppg DECIMAL(2,1) NOT NULL,
  rpg DECIMAL(2,1) NOT NULL,
  apg DECIMAL(2,1) NOT NULL,
  bpg DECIMAL(2,1) NOT NULL,
  mpg DECIMAL(2,1) NOT NULL,
  spg DECIMAL(2,1) NOT NULL,
  assists INT(4) NOT NULL,
  blocks INT(4) NOT NULL,
  steals INT(4) NOT NULL,
  turnovers INT(4) NOT NULL,
  offReb INT(4) NOT NULL,
  defReb INT(5) NOT NULL,
  totReb INT(5) NOT NULL,
  fgm INT(5) NOT NULL,
  fga INT(5) NOT NULL,
  tpm INT(5) NOT NULL,
  tpa INT(5) NOT NULL,
  ftm INT(5) NOT NULL,
  fta INT(5) NOT NULL,
  pFouls INT(4) NOT NULL,
  points INT(5) NOT NULL,
  gamesPlayed INT(4) NOT NULL,
  gamesStarted INT(4) NOT NULL,
  plusMinus INT(4) NOT NULL,
  min INT(5) NOT NULL,
  dd2 INT(4) NOT NULL,
  td3 INT(4) NOT NULL,
  UNIQUE KEY personId
);

CREATE TABLE stats (
  id serial PRIMARY KEY,
  checkin DATE NOT NULL,
  checkout DATE NOT NULL,
  property_id INT(3) NOT NULL
);