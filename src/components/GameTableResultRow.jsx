var React = require('react');
//var moment = require('moment');

var {connect} = require('react-redux');
//var actions = require('../actions/ftips-actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class GameTableResultRow extends React.Component {

  constructor (props) {
    super(props);
    //var {round_num} = this.props;
    //var {id, round_num, time, venue_id, home_team_id, away_team_id, result_team_id} = this.props;
    //value: round_num
    this.getResultRow = this.getResultRow.bind(this);
    //this.handleChange = this.handleChange.bind(this);

  }

  getResultRow () {
      if (result_team_id === 0) {
        return ( //Set up tip row
          <tr>
            <td>tip</td>
            <td>time</td>
            <td>tip</td>
          </tr>
        )
      }
      else { //Set up result row
        return (
          <tr>
            <td>tip result</td>
            <td>score</td>
            <td>tip result</td>
          </tr>
        )
      }
  }

  render () {

    var {id, round_num, time, venue_id, home_team_id, away_team_id, result_team_id} = this.props;
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    //var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();
    // <p>id:{id}, Round:{round_num}, Venue:{venue_id}, Home:{home_team_id}, Away:{away_team_id}, Result:{result_team_id} </p>
    console.log("result_team_id:", result_team_id);
    if (result_team_id === 0) {
      return ( //Set up tip row
        <tr>
          <td>tip</td>
          <td>time</td>
          <td>tip</td>
        </tr>
      )
    }
    else { //Set up result row
      return (
        <tr>
          <td>tip result</td>
          <td>score</td>
          <td>tip result</td>
        </tr>
      )
    }

/*
    return (

       {this.getResultRow()}

    )
*/

  }
};

export default connect(

  (state) => {
    /*return {
      round_num: state.round_num
    }; */
    return state;
  }


)(GameTableResultRow);
