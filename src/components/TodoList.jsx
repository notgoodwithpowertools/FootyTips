var React = require('react');
var {connect} = require('react-redux');

//var Todo = require('./Todo.jsx');
import Todo from './Todo.jsx';
var TodoAPI = require('../api/TodoAPI.jsx');

// Convert to React.Component
//export var TodoList = React.createClass({
export class TodoList extends React.Component {

  // Convert to React.Component
  //render: function(){
  render () {


    var {todos, showCompleted, searchText} = this.props;
    console.log("showCompleted:", showCompleted);
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      //if (todos.length === 0) {
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      //return TodoAPI.filterTodos(todos, showCompleted, searchText).map( (todo) => {
      return filteredTodos.map( (todo) => {
        console.log("todo.id:", todo.id);
        // refactor for react-redux using Connect
        /*
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
        */
        return (
          <Todo key={todo.id} {...todo} />
        )
      });
    }
    return (
      <div>
       {renderTodos()}
      </div>

    )
  }
};

//module.exports = TodoList;
//module.exports = connect(
export default connect(
  (state) => {
    /*return {
      todos: state.todos
    };*/
    return state;
  }

)(TodoList);
