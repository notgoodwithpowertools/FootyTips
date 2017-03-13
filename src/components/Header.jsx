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
var Header = (props) => {
  return (
    <header>
      <meta charset="UTF-8"/>
      <title>Second Header</title>
    </header>
  )
};

module.exports = Header;
