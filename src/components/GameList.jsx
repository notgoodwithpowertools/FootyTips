var React = require('react');
var {connect} = require('react-redux');

//var Todo = require('./Todo.jsx');
import Game from './Game.jsx';
//var TodoAPI = require('../api/TodoAPI.jsx');

// Convert to React.Component
//export var TodoList = React.createClass({
export class GameList extends React.Component {

  // Convert to React.Component
  //render: function(){
  render () {

    var {games} = this.props;


    //console.log("showCompleted:", showCompleted);
    var renderGames = () => {
      //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      //if (todos.length === 0) {
      //if (filteredTodos.length === 0) {

      if (games.length === 0) {
        return (
          <p className="container__message">No games</p>
        )
      }
      //return TodoAPI.filterTodos(todos, showCompleted, searchText).map( (todo) => {
      return games.map( (game) => {
        console.log("game.id:", game.id);
        // refactor for react-redux using Connect
        /*
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
        */
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

//module.exports = TodoList;
//module.exports = connect(
export default connect(
  (state) => {
    /*return {
      todos: state.todos
    };*/
    return state;
  }

)(GameList);
