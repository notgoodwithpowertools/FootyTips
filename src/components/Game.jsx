var React = require('react');
//var moment = require('moment');

var {connect} = require('react-redux');
//var actions = require('../actions/ftips-actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class Game extends React.Component {

  render () {

    var {id, round_num, time, venue_id, home_team_id, away_team_id, result_team_id} = this.props;
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    //var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();

    return (
      <div>
        <p>id:{id}, Round:{round_num}, Venue:{venue_id}, Home:{home_team_id}, Away:{away_team_id}, Result:{result_team_id} </p>
      </div>
    )
  }
};

export default connect()(Game);
