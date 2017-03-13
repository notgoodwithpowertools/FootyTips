var React = require('react');
//var moment = require('moment');

var {connect} = require('react-redux');
var ftipsActions = require('../actions/ftips-actions.jsx');
var FTipsAPI = require('../api/FTipsAPI.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class Pagination extends React.Component {

  constructor (props) {
    super(props);

    var {round_num, games} = this.props;

    //this.state = {
      //rounds: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Final 1', 'Final 2', 'Grand Final']
    this.rounds = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Final 1', 'Final 2', 'Grand Final'];
    var selectedIndex = this.rounds.indexOf(round_num);
    this.state = {
      filteredRounds: FTipsAPI.filterRounds(selectedIndex, this.rounds)
    };
      //value: round_num
    //};
    //var {round, games} = this.props;
    //console.log("Pagination constructor:", round);
    /*this.state = {
      round_num: round
      //value: round_num
    };*/
    //this.getRoundsList = this.getRoundsList.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  /*
  getPages (games) {
    //return FTipsAPI.filterGames(games, round).map( (game) => {
    return filterGames.map( (game) => {
      console.log("filtered game.id:", game.id);
      return (
            <GameTableRow key={game.id} {...game} />
            //<GameTableResultRow key={`Result${game.id}`} {...game} />

      )
    });
  }
  */

  getPages () {
    //var {round_num, games} = this.props;
    //const rounds = [1,  2,3,4,5];
    console.log("getPages...");
    /*
    const divStyle = {
      paddingTop: "5px",
      backgroundColor: "yellow"
    };
    */

    var getRounds = (index) => {
        return this.state.filteredRounds.map( (round, index) => {
              console.log("round:", typeof(round) + ' Index:' + index);
              return (
                //<p>round: {round}</p>
                //<option key={round} value={round}>{round}</option>
                <button key={index} value={round} className="paginatorButton" onClick={this.handleClick}>{round}</button>
              )
        })
    }


    //const rounds = [1, 2, 3];

    if (this.rounds.length === 0) {
      return (
        <p className="container__message">No Rounds</p>
      )
    }
    else {
      return (
        <div className="fullWidth">
          <div className="pagination">
            <button key={0} value="decrement" className="paginatorButton" onClick={this.handleClick}>&laquo;</button>
              {getRounds()}
            <button key={99} value="increment" className="paginatorButton" onClick={this.handleClick}>&raquo;</button>
          </div>
        </div>
      )
    }
      /*
      return this.state.rounds.map( (round, index) => {
          console.log("round:", typeof(round) + ' Index:' + index);
          return (
            //<p>round: {round}</p>
            //<option key={round} value={round}>{round}</option>
            <button key={index} value={round} className="paginatorButton" onClick={this.handleClick}>{round}</button>
          )
        })
      }
      */
      /*
      return (
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <button value={round} className="paginatorButton" onClick={this.handleClick}>Grand<br></br>Final</button>
        <li href="#"><a>3</a></li>
        <a value={round} ref={'Round 4'} onClick={this.handleClick}>4</a>
        <a href="#">5</a>
        <a href="#">&raquo;</a>
      </div>
      )
      */

  }

  handleClick (event) {
    event.preventDefault();
    var {round_num, dispatch} = this.props;
    //console.log("Event:", event.target);
    //console.log("Event:", this.refs.);
    console.log("Click... Current Round:" + round_num);
    console.log("Click Value", typeof(event.target.value) + ' = ' + event.target.value);
    console.log("Setting Round to:", event.target.value);
    var selectedRound = event.target.value;
    var selectedIndex = this.rounds.indexOf(round_num);
    console.log("Current selectedIndex:", selectedIndex);

    if ((selectedRound == 'increment') || (selectedRound == 'decrement')){
      console.log("switching..." + selectedRound);
      switch (selectedRound) {
        case 'increment':
          //selectedIndex = selectedIndex + 1;
          selectedIndex = selectedIndex + 1 == this.rounds.length ? selectedIndex : selectedIndex + 1;
          break;
        case 'decrement':
          //selectedIndex = selectedIndex - 1;
           selectedIndex = selectedIndex - 1 < 0 ? 0 : selectedIndex - 1;
          break;
      }
    }
    else {
      selectedIndex = this.rounds.indexOf(selectedRound);
    }
    console.log("New selectedIndex:", selectedIndex);
    var filteredRounds =  FTipsAPI.filterRounds(selectedIndex, this.rounds);
    this.setState({filteredRounds: filteredRounds});
    dispatch(ftipsActions.setRoundNum(this.rounds[selectedIndex]));
  }



  render () {

    var {round_num, games} = this.props;

    //var {id, round_num, time, venue_id, home_team_id, away_team_id, result_team_id} = this.props;
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    //var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();
    console.log("Pagination round_num:", round_num);

    return (
      <div>
        <p>Upcoming Round:{round_num}</p>
        {this.getPages()}
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
      round_num: state.round_num,
      games: state.games
    };
    //return state;
  }

)(Pagination);
