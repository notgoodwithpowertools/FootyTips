var React = require('react');
var {connect} = require('react-redux');

//import Game from './Game.jsx';
import GameTableRow from './GameTableRow.jsx';
import GameTableResultRow from './GameTableResultRow.jsx';
//var TodoAPI = require('../api/TodoAPI.jsx');
import FTipsAPI from '../api/FTipsAPI.jsx';

/*
//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
@include foundation-flex-classes;
@include foundation-flex-grid;
*/

// Convert to React.Component
//export var TodoList = React.createClass({
export class GameList extends React.Component {

  constructor (props) {
    super(props);
    var {round, games} = this.props;

    /*
    this.state = {
      rounds: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Final 1', 'Final 2', 'Grand Final']
      //value: round_num
    };
    */
    this.getTableRows = this.getTableRows.bind(this);
    //this.handleChange = this.handleChange.bind(this);

  }

  getTableRows (filterGames) {
    //return FTipsAPI.filterGames(games, round).map( (game) => {
    return filterGames.map( (game) => {
      console.log("filtered game.id:", game.id);
      return (
            <GameRow key={game.id} {...game} />
            //<GameTableResultRow key={`Result${game.id}`} {...game} />

      )
    });
  }

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

      return (
          <table>
            <tbody>
              {this.getTableRows(filterGames)}
            </tbody>
          </table>
      )

    }

    /*return (
      <div>
        {renderGames()}
      </div>
    )*/
    return (
      <div className="row">
        <div className="small-4 columns">4 columns</div>
        <div className="columns">Whatever's left!</div>
        <div className="columns">Whatever's left!</div>
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
