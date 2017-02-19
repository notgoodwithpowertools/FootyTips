var React = require('react');
var {connect} = require('react-redux');
var actions = require('../actions/actions.jsx');

// Convert to React.Component
//export var AddTodo = React.createClass({

export class AddTodo extends React.Component {

  // Convert to React.Component
  // handleSubmit : function(e){
  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      //this.props.onAddTodo(todoText);
      //dispatch(actions.addTodo(todoText));
      console.log("Calling startAddTodo...");
      dispatch(actions.startAddTodo(todoText));
    } /*else { */

    this.refs.todoText.focus();

    /* } */
  }

  // Convert to React.Component
  //render: function() {
  // Also, fix bind
  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
          <button className="button expanded">
            Add Todo
          </button>
        </form>
      </div>

    )
  }

// Convert to React.Component
//});
};


//module.exports = AddTodo;
export default connect()(AddTodo);
