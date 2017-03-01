import React from 'react';
import * as ftipsActions from '../actions/ftips-actions.jsx';
//import connect from 'react-redux';
var {connect} = require('react-redux');

export class RoundsSelector extends React.Component {

  constructor (props) {
    super(props);
    var {round_num} = this.props;

    this.state = {
      rounds: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Final 1', 'Final 2', 'Grand Final']
      //value: round_num
    };
    this.getRoundsList = this.getRoundsList.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  /*
  getInitialState () {
    console.log('Getting initial state...');
    var {round_num} = this.props;
    //var selected = this.getSelectedFromProps(this.props);
    return {
      value: round_num
    }
  }
  */
  handleChange (event) {
    var {dispatch} = this.props;
    //this.setState({value: event.target.value});
    console.log("Value", typeof(event.target.value));
    dispatch(ftipsActions.setRoundNum(event.target.value));
  }

  getRoundsList () {

    //const rounds = [1,  2,3,4,5];
    console.log("Renderrounds");

    //const rounds = [1, 2, 3];

    if (this.state.rounds.length === 0) {
      return (
        <p className="container__message">No Rounds</p>
      )
    }
    else {
      return this.state.rounds.map( (round) => {
          console.log("round:", typeof(round));
          return (
            <option key={round} value={round}>{round}</option>
          )
        })
    }
  }

  render () {

    var {round_num} = this.props;
    //this.setState(value: round_num);
    //console.log("Value:", this.state.value);
    if (this.state.rounds.length === 0) {
      return (
        <p className="container__message">No Rounds</p>
      )
    }

    return (
      <div>
        <select value={round_num} onChange={this.handleChange}>
          {this.getRoundsList()}
        </select>
      </div>
    )
    
  }
};

export default connect(
  (state) => {
    return {
      round_num: state.round_num
    };
    //return state;
  }

)(RoundsSelector);
