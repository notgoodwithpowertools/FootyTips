var $ = require('jquery');


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

  }

};
