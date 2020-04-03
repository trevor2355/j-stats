const axios = require('axios');

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
  //inserts stats for each players years into stats table
  .then(jazzPlayers => {
    jazzPlayers.forEach(player => {
      insertStats(player)
    })
  })
  .catch(err => {
    console.log(err);
  })

  //write a function that iterates over the jazz players and inserts one record for each jazz player into the db
  const insertPlayersInfo = function(jazzPlayers) {
    jazzPlayers.forEach(player => {
      var personId = player.personId;
      var firstName = player.firstName;
      var lastName = player.lastName;
      var jersey = player.jersey;
      var pos = player.pos;
      var heightFeet = player.heightFeet;
      var heightInches = player.heightInches;
      var weightPounds = player.weightPounds;
      var birthDate = player.dateOfBirthUTC;
      var draftRound = player.draft.roundNum;
      var draftPick = player.draft.pickNum;
      var draftYear = player.draft.seasonYear;
      var yearsPro = player.yearsPro;
      var playerStats = getCareerStats(personId)
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
    })
  }

  //write a function that is called while each player is being inserted into the database this function will insert a record for each year that a particular player played in the nba.
  
  //this function will call the API to get overall career stats to insert into the players db
  const getCareerStats = function(personId) {
    axios(`http://data.nba.net/10s/prod/v1/2019/players/${personId}_profile.json`)
      .then(response => {
        console.log('response: ', response.data.league.standard.stats.careerSummary)
        return response.data.league.standard.stats.careerSummary;
      })
      .catch(err => {
        console.log(err);
      })
  }

  //write a function that is called while each player is being inserted into the database this function will insert a record for each year that a particular player played in the nba.
  const getYearlyStats = function(personId) {
    return axios(`http://data.nba.net/10s/prod/v1/2019/players/${personId}_profile.json`)
      .then(response => {
        return response.data.league.standard.stats.regularSeason.season;
      })
      .catch(err => {
        console.log(err);
      })
  }

  const insertStats = function (player) {
    var personId = player.personId;
    var yearlyStatsArray = getYearlyStats(personId);
    yearlyStatsArray.forEach(year => {
      var year = year.seasonYear
      var topg = year.total.topg;
      var tpp = year.total.tpp;
      var ftp = year.total.ftp;
      var fgp = year.total.fgp;
      var ppg = year.total.ppg;
      var rpg = year.total.rpg;
      var apg = year.total.apg;
      var bpg = year.total.bpg;
      var mpg = year.total.mpg;
      var spg = year.total.spg;
      var assists = year.total.assists;
      var blocks = year.total.blocks;
      var steals = year.total.steals;
      var turnovers = year.total.turnovers;
      var offReb = year.total.offReb;
      var defReb = year.total.defReb;
      var totReb = year.total.totReb;
      var fgm = year.total.fgm;
      var fga = year.total.fga;
      var tpm = year.total.tpm;
      var tpa = year.total.tpa;
      var ftm = year.total.ftm;
      var fta = year.total.fta;
      var pFouls = year.total.pFouls;
      var points = year.total.points;
      var gamesPlayed = year.total.gamesPlayed;
      var gamesStarted = year.total.gamesStarted;
      var plusMinus = year.total.plusMinus;
      var min = year.total.min;
      var dd2 = year.total.dd2;
      var td3 = year.total.td3;
    })
  }
  