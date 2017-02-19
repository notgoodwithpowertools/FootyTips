import React from 'react';
import * as Redux from 'react-redux';
import * as actions from '../actions/actions.jsx';
import * as ftipsActions from '../actions/ftips-actions.jsx';

// Convert to React.Component
//export var Login = React.createClass({
export class Login extends React.Component {

  constructor (props) {
    super(props);
    this.onLoginGitHub = this.onLoginGitHub.bind(this);
    this.onLoginEmail = this.onLoginEmail.bind(this);
    this.register = this.register.bind(this);
  }

  onLoginGitHub () {
    var {dispatch} = this.props;
    console.log("Begin GitHub login...");
    dispatch(ftipsActions.startGitHubLogin());
  }

  onLoginEmail () {
    var {dispatch} = this.props;
    console.log("Begin Email login...");
    dispatch(ftipsActions.startEmailLogin());
  }

  register () {
    var {dispatch} = this.props;
    console.log("Begin registration...");
    dispatch(ftipsActions.registerUser());
  }

  //Same as ...
  //render: function () {}
  render () {
    return (
      <div>
        <h1 className="page-ttile">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with Github account...</p>
              <button className="button" onClick={this.onLoginGitHub}>Login with Github</button>
              <p>Login with email account...</p>
              <button className="button" onClick={this.onLoginEmail}>Login with Email</button>
              <p>Register email account...</p>
              <button className="button" onClick={this.register}>Register Email</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

//export default Login;
export default Redux.connect()(Login);
