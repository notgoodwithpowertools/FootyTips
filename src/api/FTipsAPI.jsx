var $ = require('jquery');

import teams from '../api/teams.js';

module.exports = {
  filterGames: function (games, round) {

    console.log("Filtered games round num:", round);

    var filteredGames = games;

    // Filter by showCompleted
    filteredGames = filteredGames.filter((game) => {
      console.log("game.round:", game.round_num);
      return game.round_num === round;

    });
    console.log("filteredGames:", filteredGames);
    return filteredGames;

  },

  filterRounds (selectedIndex, rounds) {

    console.log("filterRounds...", selectedIndex);
    var filteredRounds = rounds;
    //var selectedIndex = rounds.indexOf(selectedRound);
    console.log("Found rounds selectedIndex:", selectedIndex);
    console.log("Item at index:" + rounds[selectedIndex]);
    var spread = 3;
    var start = selectedIndex - 1 < 0 ? 0 : selectedIndex - 1;
    var end = start + spread;
    console.log("Start index:" + start + ", End index:" + end);
    filteredRounds = rounds.slice(start, end);
    console.log("filterRounds...", filteredRounds);
    //return filteredRounds = rounds.slice(start, end);
    return filteredRounds;

  },

  getTeam (id) {
  /*
    const teams = [
      {
        id:0,
        name: 'Adelaide',
        nickname: 'Crows',
        sname: 'ADE',
        img: 'ade2.jpg'
      },
      {
        id:1,
        name: 'Brisbane',
        nickname: 'Bears',
        sname: 'BRI',
        img: 'download.jpg'
      },
      {
        id:2,
        name: 'Carlton',
        nickname: 'Blues',
        sname: 'CAR',
        img: 'car2.jpg'
      },
      {
        id:3,
        name: 'Collingwood',
        nickname: 'Magpies',
        sname: 'COL',
        img: 'download.jpg'
      }
    ];
    */
    return teams[id];
  }
};
