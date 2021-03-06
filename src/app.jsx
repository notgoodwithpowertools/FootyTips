var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//Moved to router/index/js
var {hashHistory} = require('react-router');

import ComponentOne from './components/ClassComponent1.jsx';
import ComponentTwo from './components/ClassComponent2.jsx';

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App CSS
require('style!css!sass!./styles/app.scss');

//Import Firebase
//import './../playground/firebase/index.js';

//Test experimental JS

//Import Router
import router from './router/index.jsx'
//var Routes = require('./routes');
//var Main = require('./components/Main.jsx');
//var TodoApp = require('./components/TodoApp.jsx');

var actions = require('./actions/actions.jsx');
var ftipsActions = require('./actions/ftips-actions.jsx');

var TodoAPI = require('./api/TodoAPI.jsx');

var store = require('./store/configureStore.jsx').configure();

//Moved to router/index.js
//import Login from './components/Login.jsx';

//Moved to router/index.js
//import TodoApp from './components/TodoApp.jsx';

//Use Firebase to control user page redirection depending on login state
import firebase from './api/firebase/index.js';

firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    store.dispatch(ftipsActions.startAddTeams());
    store.dispatch(ftipsActions.startAddGames());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/login');
  }
});



/*
var ObjOne = {
  name: 'Andrew',
  location: 'Melbourne'
};
var ObjTwo = {
  //age: 49,
  ...ObjOne,
  age: 49
};
console.log("Object Two:", ObjTwo);

// Destructuring
var {name} = ObjOne;
console.log("Destructured name:", name);
*/

/*
var {name2} = ObjTwo;
console.log("Destructured Object 2 name:", name2);
*/

/*
ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('app')
);
*/

var initialShowCompleted = TodoAPI.getShowCompleted();
console.log("initialShowCompleted:", initialShowCompleted);


store.subscribe(() => {
  var state = store.getState();
  //console.log('New state', store.getState());
  console.log('New state', state);
  //TodoAPI.setTodos(state.todos);
  TodoAPI.setShowCompleted(state.showCompleted);
});

//store.dispatch(actions.startAddTodos());
//Add items to the store from local storage

//var initialTodos = TodoAPI.getTodos();
//console.log("Adding initial todos...");
//store.dispatch(actions.addTodos(initialTodos));
console.log("Setting initial show completed state zzz...", initialShowCompleted);
store.dispatch(actions.setShowCompleted(initialShowCompleted));


/*
var initialShowCompleted = TodoAPI.getShowCompleted();
console.log("initialShowCompleted:", initialShowCompleted);
*/
//store.dispatch(actions.setShowCompleted(initialShowCompleted));



/*
console.log('++++++++++++++++');
store.dispatch(actions.addTodo('walk the rabbits'));
*/
/*
console.log('****************');
store.dispatch(actions.setSearchText('rabbits'));
*/
/*
console.log('================');
store.dispatch(actions.toggleShowCompleted());
*/

/*
ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
*/

//Moved routing middleware to src/routes/index.js


// refactor using Provider - all children can access store
ReactDOM.render(
  <div>
  <Provider store={store}>

    {router}

  </Provider><ComponentOne count={99}/><ComponentTwo count={29}/></div>,

  document.getElementById('app')
);
