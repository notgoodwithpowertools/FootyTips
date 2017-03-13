var React = require('react');

//var Nav = require('./Nav.jsx');

//import Nav from './Nav.jsx';

/*
var Main = React.createClass({
  render: function(){
    return(
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {this.props.children}
    </div>
  );
  }
});
*/

// Refactor to stateless functional Component
var LandingPage = (props) => {
  return (
    <div className="landing">
    <div className="title">
      <div className="first">
        <h1 className="heading">Footy Tipping</h1>
      </div>
      <div className="second">
        <button className="button1">Log in</button>
        <button className="button2">Register</button>
      </div>
    </div>
    </div>
  )
};

module.exports = LandingPage;
