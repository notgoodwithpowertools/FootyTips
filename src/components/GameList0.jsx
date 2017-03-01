var React = require('react');
var {connect} = require('react-redux');

import Game from './Game.jsx';
//var TodoAPI = require('../api/TodoAPI.jsx');
import FTipsAPI from '../api/FTipsAPI.jsx';

// Convert to React.Component
//export var TodoList = React.createClass({
export class GameList extends React.Component {

  render () {

    var {round, games} = this.props;
    console.log("GamesList round:", round);

    //console.log("showCompleted:", showCompleted);
    var renderGames = () => {

      var filterGames = FTipsAPI.filterGames(games, round);
      if (filterGames.length === 0) {
        return (
          <p className="container__message">No games</p>
        )
      }
      //return FTipsAPI.filterGames(games, round).map( (game) => {
      return filterGames.map( (game) => {
        console.log("filtered game.id:", game.id);
        return (
          <Game key={game.id} {...game} />
        )
      });
    }

    return (
      <div>
        {renderGames()}
      </div>
    )

  }
};

export default connect(
  (state) => {
    return {
      round: state.round_num,
      games: state.games
    };
    //return state;
  }

)(GameList);
