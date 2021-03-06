var React = require('react');
var moment = require('moment');

var {connect} = require('react-redux');
var actions = require('../actions/actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class Todo extends React.Component {

  render () {

    var {id, text, completed, createdAt, completedAt, onToggle, dispatch} = this.props;
    var todoClassname = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {

      var message = 'Created ';
      var timeStamp = createdAt;

      if (completed) {
        message = 'Completed '
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');

    }

    var oggle = function (){

      console.log("Toggled..." + id);
      //this.props.onToggle(id);
      onToggle(id);
      //return 'wally';

    };

    var oggle2 = () => {
      console.log("Toggled..." + id + " OID:");
    };
    /*var oggle = function(id){
    console.log("Toggled..." + id);
    //this.props.onToggle(id);

    };*/
    //<div onClick={() => {this.props.onToggle(id)}}>
    //<div onClick={this.props.onToggle(id)}>
    //<div onClick={oggle2}>

    //<div onClick={ () => {this.props.onToggle(id)}} >

    // refactor to use react-redux and connect
    /*
    return (


      <div className={todoClassname} onClick={oggle}>
        <div>
          <input type="checkbox" checked={completed} readOnly></input>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
    */

    return (


      <div className={todoClassname} onClick={ () => {
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
          <input type="checkbox" checked={completed} readOnly></input>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
};

export default connect()(Todo);
