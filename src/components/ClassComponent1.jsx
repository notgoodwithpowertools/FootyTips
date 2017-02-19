import React from 'react';

var ClassComponent1 = React.createClass({

  getInitialState: function () {
    return {
      count: this.props.count
    }
  },

  getDefaultProps: function () {
    return {
      count: 11
    };
  },

  propTypes: {
    count: React.PropTypes.number.isRequired
  },

  onClick: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function () {
    return (
      <div>
        <h3>Class Component 1 Using React.createClass</h3>
        <p>Count: {this.state.count} </p>
        <button className='button' onClick={this.onClick}>One</button>
      </div>
    );
  }
});


export default ClassComponent1;
