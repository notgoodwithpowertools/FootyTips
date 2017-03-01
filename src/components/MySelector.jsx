import React from 'react';
//import connect from 'react-redux';
var {connect} = require('react-redux');

export class MySelector extends React.Component {

  constructor (props) {
    super(props);
    this.renderRounds = this.renderRounds.bind(this);

  }

  renderRounds () {

    //const rounds = [1,  2,3,4,5];
    console.log("Renderrounds");

    const rounds = [1, 2, 3];

    if (rounds.length === 0) {
      return (
        <p className="container__message">No Rounds</p>
      )
    }
    else {
      console.log("Renderrounds....");
      return rounds.map( (round) => {
          //console.log("round:", round);
          return (
            <option key={round} >Round {round}</option>
          )
        })
    }
      /*
      return (
        <option key='1'>Round 1</option>
        <option key='2'>Round 2</option>
        <option key='3'>Round 3</option>
      )
      return rounds.map( (round) => {
        console.log("round:", round);
        // refactor for react-redux using Connect
        /*
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )

        return (
          <option value={round}>Round {round}</option>
        )
      });

      rounds.map( (round) => {
        console.log("round:", round)
      })

      return (
        <div>
          <select> {options}
          </select>
        </div>
      )
    } */
  }


      /*
      var getRounds = function() {
        rounds.map( (round) => {
        console.log("round num:", round);

        // refactor for react-redux using Connect
        /*
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
        */
/*
        return (
          //<Team key={team.id} {...team} />
          <option value={round}>Round {round}</option>
        )

        });
      };

      return (
        <select> {getRounds()}

        </select>
      )
    }
    //return TodoAPI.filterTodos(todos, showCompleted, searchText).map( (todo) => {
  }
*/
  // Convert to React.Component
  //render: function(){
  render () {

    var {round_num} = this.props;

    return (
      <div>
        <label>Select Round - Current round: {round_num}

        </label>
        <select>
        {this.renderRounds()}
        </select>

      </div>

    )
  }
};

//module.exports = TodoList;
//module.exports = connect(
export default connect(
  (state) => {
    return {
      round_num: state.round_num
    };
    //return state;
  }

)(MySelector);
