var React = require('react');
var {connect} = require('react-redux');

//import Game from './Game.jsx';
import GameRow from './GameRow.jsx';
//import GameTableResultRow from './GameTableResultRow.jsx';
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
    //this.getTableRows = this.getTableRows.bind(this);
    //this.handleChange = this.handleChange.bind(this);

  }

  getGameRows (filterGames) {
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

   var myStyle = {

     fill: 'blue',
     strokeWidth:10,
     stroke: 'green'

   }
    var {round, games} = this.props;
    console.log("GamesList round:", round);

    //console.log("showCompleted:", showCompleted);
    var renderGames = () => {

      var filterGames = FTipsAPI.filterGames(games, round);
      if (filterGames.length === 0) {
        return (
          <div>
            <div>
              <p className="container__message">No games</p>
            </div>
            <div>
              <svg width="400" height="100">
                <rect width="400" height="100"
                  style={myStyle} />
                Sorry, your browser does not support inline SVG.
              </svg>
            </div>
          </div>

        )
      }
      return (<div>{this.getGameRows(filterGames)}</div>);
/*
      return (
          <table>
            <tbody>
              {this.getGameRows(filterGames)}
            </tbody>
          </table>
      )
*/
      /*
      <div className="flex-container" align="center">
        <div className="flex-item"><img style='width:100%; max-width: 90px;' src="/public/images/ess2.jpg" /></div>
        <div className="flex-item" style="line-height: 150%">Etihad<br>Sep 23<br>2:30pm</div>
        <div className="flex-item"><img style='width:100%; max-width: 90px;' src="/public/images/car2.jpg"/></div>
      </div>
      */
      /*
      return (
        <div className="flex-container">
          <div className="flex-item"><img src="/images/ess2.jpg" /></div>
          <div className="flex-item">Etihad</div>
          <div className="flex-item"><img src="/images/car2.jpg"/></div>
        </div>
      )
      */
    }

    return (
      <div>
        {renderGames()}
      </div>
    )
    /*
    return (
      <div className="row">
        <div className="small-4 columns">4 columns</div>
        <div className="columns">Whatever's left!</div>
        <div className="columns">Whatever's left!</div>
      </div>
    )
    */


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
