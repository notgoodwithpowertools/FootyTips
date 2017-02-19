var React = require('react');
//var moment = require('moment');

var {connect} = require('react-redux');
//var actions = require('../actions/ftips-actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class Team extends React.Component {

  render () {

    var {id, name, nickname, sname} = this.props;
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();

    return (
      <div>
        <p>Name:{name}, Nickname:{nickname}, Short Name:{sname}</p>
        <img src={imageFile} />

      </div>
    )
  }
};

export default connect()(Team);
