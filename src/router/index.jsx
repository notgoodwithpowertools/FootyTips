import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main.jsx';
import LandingPage from '../components/LandingPage.jsx';
import TodoApp from '../components/TodoApp.jsx';
import Login from '../components/Login.jsx';
import NotFound from '../components/NotFound.jsx';
import TeamList from '../components/TeamList.jsx';
import firebase from '../api/firebase/index.js';

import ComponentOne from '../components/ClassComponent1.jsx';
import ComponentTwo from '../components/ClassComponent2.jsx';

//import Teams from '../components/TeamList.jsx';
//import GameList from '../components/GameList.jsx';
import GamePage from '../components/GamePage.jsx';



// Make some middleware to evaluate login to redirect
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) { //If nobody logged in
    replace('/login');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) { //If already logged in
    replace('/start');
  }
  next();
};

var notFound = (nextState, replace, next) => {
  if (firebase.auth().currentUser) { //If already logged in
    replace('/todos');
    next();
  }
  else {
    replace('/');
    next();
  }

};


/*
var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) { //If already logged in
    replace('/teams');
  }
  next();
};
*/

export default (
  <Router history={hashHistory}>
    <Route path="login" component={Login} onEnter={redirectIfLoggedIn} />
    <Route path="start" component={LandingPage} onEnter={requireLogin} />


    <Route path="/" component={Main} onEnter={requireLogin}>
      //<IndexRoute component={TodoApp} onEnter={redirectIfLoggedIn}/>
      <Route path="teams" component={TeamList} onEnter={requireLogin}/>
      <Route path="games" component={GamePage} onEnter={requireLogin}/>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <Route path="component1" component={ComponentOne} onEnter={requireLogin}/>
      <Route path="component2" component={ComponentTwo} onEnter={requireLogin}/>
      //<Route path="start" component={LandingPage} onEnter={requireLogin} />
    </Route>


  </Router>

)
