var React = require('react');
var {connect} = require('react-redux');

//var Todo = require('./Todo.jsx');
import Team from './Team.jsx';
var TodoAPI = require('../api/TodoAPI.jsx');

// Convert to React.Component
//export var TodoList = React.createClass({
export class TeamList extends React.Component {

  // Convert to React.Component
  //render: function(){
  render () {


    var {teams} = this.props;


    //console.log("showCompleted:", showCompleted);
    var renderTeams = () => {
      //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      //if (todos.length === 0) {
      //if (filteredTodos.length === 0) {

      if (teams.length === 0) {
        return (
          <p className="container__message">No teams</p>
        )
      }
      //return TodoAPI.filterTodos(todos, showCompleted, searchText).map( (todo) => {
      return teams.map( (team) => {
        console.log("team.id:", team.id);
        // refactor for react-redux using Connect
        /*
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
        */
        return (
          <Team key={team.id} {...team} />
        )
      });
    }
    return (
      <div>
       {renderTeams()}
      </div>

    )
  }
};

//module.exports = TodoList;
//module.exports = connect(
export default connect(
  (state) => {
    return {
      teams: state.teams
    };
    //return state;
  }

)(TeamList);
