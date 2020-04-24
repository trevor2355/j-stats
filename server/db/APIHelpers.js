const axios = require('axios');
const db = require('./connection.js');

axios('http://data.nba.net/10s/prod/v1/2019/players.json')
  //returns all players in league
  .then(response => {
   return response.data.league.standard;
  })
  //returns all players on Jazz roster
  .then(players => {
    var jazzPlayers = [];
    players.forEach(player => {
      if (player.teamId == 1610612762)
      jazzPlayers.push(player);
    })
    return jazzPlayers
  })
  //inserts all jazz players into players table returns jazzPlayers
  .then(jazzPlayers => {
    insertPlayersInfo(jazzPlayers);
    return jazzPlayers
  })
  //inserts career stats into players table and yearly stats into stats table
  .then(jazzPlayers => {
    jazzPlayers.forEach(player => {
    getPlayerStats(player.personId)
    })
  })
  .catch(err => {
    console.log(err);
  })

//this inserts basic player info into the 
const insertPlayersInfo = function(jazzPlayers) {
  jazzPlayers.forEach(player => {
    //console.log('insertPlayersInfo player: ', player)
    var personId = player.personId;
    var firstName = player.firstName;
    var lastName = player.lastName;
    if (lastName === 'O\'Neale') {
      lastName = 'O Neale'
    }
    var jersey = player.jersey;
    var pos = player.pos;
    var heightFeet = player.heightFeet;
    var heightInches = player.heightInches;
    var weightPounds = player.weightPounds;
    var birthDate = player.dateOfBirthUTC;
    var draftRound = player.draft.roundNum || 0;
    var draftPick = player.draft.pickNum || 0;
    var draftYear = player.draft.seasonYear || 0;
    var yearsPro = player.yearsPro;

    //write mysql query that will insert basic player info into players table
    var queryString = `INSERT INTO players (personId, firstName, lastName, jersey, pos, heightFeet, heightInches, weightPounds, birthDate, draftRound, draftPick, draftYear, yearsPro) VALUES (${personId}, '${firstName}', '${lastName}', ${jersey}, '${pos}', ${heightFeet}, ${heightInches}, ${weightPounds}, '${birthDate}', ${draftRound}, ${draftPick}, ${draftYear}, ${yearsPro})`;
    db.query(queryString, (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Successfully inserted ${firstName} ${lastName} into the players table`)
      }
    })
  })
}

//this function will call the API to get overall career stats to insert into the players db
const getPlayerStats = function(personId) {
  axios(`http://data.nba.net/10s/prod/v1/2019/players/${personId}_profile.json`)
    .then(response => {
      insertCareerStats(personId, response.data.league.standard.stats.careerSummary);
      insertYearlyStats(personId, response.data.league.standard.stats.regularSeason.season)
    })
    .catch(err => {
      console.log(err);
    })
}

const insertCareerStats = function(personId, playerStats) {
  //console.log('personId: ', personId, 'insertCareerStats playerStats: ', playerStats)
  var tpp = playerStats.tpp;
  var ftp = playerStats.ftp;
  var fgp = playerStats.fgp;
  var ppg = playerStats.ppg;
  var rpg = playerStats.rpg;
  var apg = playerStats.apg;
  var bpg = playerStats.bpg;
  var mpg = playerStats.mpg;
  var spg = playerStats.spg;
  var assists = playerStats.assists;
  var blocks = playerStats.blocks;
  var steals = playerStats.steals;
  var turnovers = playerStats.turnovers;
  var offReb = playerStats.offReb;
  var defReb = playerStats.defReb;
  var totReb = playerStats.totReb;
  var fgm = playerStats.fgm;
  var fga = playerStats.fga;
  var tpm = playerStats.tpm;
  var tpa = playerStats.tpa;
  var ftm = playerStats.ftm;
  var fta = playerStats.fta;
  var pFouls = playerStats.pFouls;
  var points = playerStats.points;
  var gamesPlayed = playerStats.gamesPlayed;
  var gamesStarted = playerStats.gamesStarted;
  var plusMinus = playerStats.plusMinus;
  var min = playerStats.min;
  var dd2 = playerStats.dd2;
  var td3 = playerStats.td3;

  var queryString = `UPDATE players SET tpp = ${tpp}, ftp = ${ftp}, fgp = ${fgp}, ppg = ${ppg}, rpg = ${rpg}, apg = ${apg}, bpg = ${bpg}, mpg = ${mpg}, spg = ${spg}, assists = ${assists}, blocks = ${blocks}, steals = ${steals}, turnovers = ${turnovers}, offReb = ${offReb}, defReb = ${defReb}, totReb = ${totReb}, fgm = ${fgm}, fga = ${fga}, tpm = ${tpm}, tpa = ${tpa}, ftm = ${ftm}, fta = ${fta}, pFouls = ${pFouls}, points = ${points}, gamesPlayed = ${gamesPlayed}, gamesStarted = ${gamesStarted}, plusMinus = ${plusMinus}, min = ${min}, dd2 = ${dd2}, td3 = ${td3} WHERE personId = ${personId};`
  db.query(queryString, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully updated player: ${personId} into the players table`);
    }
  })
}

const insertYearlyStats = function(person_Id, yearlyStats) {
  console.log('person_Id: ', person_Id, 'insertYearlyStats yearlyStats: ', yearlyStats)
  yearlyStats.forEach(year => {
    var personId = person_Id;
    var seasonYear = year.seasonYear;
    var topg = year.total.topg || 0;
    var tpp = year.total.tpp || 0;
    var ftp = year.total.ftp || 0;
    var fgp = year.total.fgp || 0;
    var ppg = year.total.ppg || 0;
    var rpg = year.total.rpg || 0;
    var apg = year.total.apg || 0;
    var bpg = year.total.bpg || 0;
    var mpg = year.total.mpg || 0;
    var spg = year.total.spg || 0;
    var assists = year.total.assists || 0;
    var blocks = year.total.blocks || 0;
    var steals = year.total.steals || 0;
    var turnovers = year.total.turnovers || 0;
    var offReb = year.total.offReb || 0;
    var defReb = year.total.defReb || 0;
    var totReb = year.total.totReb || 0;
    var fgm = year.total.fgm || 0;
    var fga = year.total.fga || 0;
    var tpm = year.total.tpm || 0;
    var tpa = year.total.tpa || 0;
    var ftm = year.total.ftm || 0;
    var fta = year.total.fta || 0;
    var pFouls = year.total.pFouls || 0;
    var points = year.total.points || 0;
    var gamesPlayed = year.total.gamesPlayed || 0;
    var gamesStarted = year.total.gamesStarted || 0;
    var plusMinus = year.total.plusMinus || 0;
    var min = year.total.min || 0;
    var dd2 = year.total.dd2 || 0;
    var td3 = year.total.td3 || 0;

    var queryString = `INSERT INTO stats (personId, seasonYear, topg, tpp, ftp, fgp, ppg, rpg, apg, bpg, mpg, spg, assists, blocks, steals, turnovers, offReb, defReb, totReb, fgm, fga, tpm, tpa, ftm, fta, pFouls, points, gamesPlayed, gamesStarted, plusMinus, min, dd2, td3) VALUES (${personId}, ${seasonYear}, ${topg}, ${tpp}, ${ftp}, ${fgp}, ${ppg}, ${rpg}, ${apg}, ${bpg}, ${mpg}, ${spg}, ${assists}, ${blocks}, ${steals}, ${turnovers}, ${offReb}, ${defReb}, ${totReb}, ${fgm}, ${fga}, ${tpm}, ${tpa}, ${ftm}, ${fta}, ${pFouls}, ${points}, ${gamesPlayed}, ${gamesStarted}, ${plusMinus}, ${min}, ${dd2}, ${td3})` 
    db.query(queryString, (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Successfully inserted player: ${personId} stats for year: ${seasonYear} into the stats table`);
      }
    })
  })
}