var React = require('react');

//var Nav = require('./Nav.jsx');
import Header from './Header.jsx';
import Nav from './Nav.jsx';


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
var Main = (props) => {
  return (
    <div>
      <Header/>
      <body>
        <Nav/>

        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <h2>React Main Component</h2>
            {props.children}
          </div>
        </div>

      </body>


    </div>
  )
};

module.exports = Main;
