//var redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';

//var {searchTextReducer, showCompletedReducer, todosReducer} = require('../reducers/reducers.jsx');
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer, teamsReducer, gamesReducer} from '../reducers/reducers.jsx';

export var configure = (initialState={}) => {
  var reducers = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer,
    teams: teamsReducer,
    games: gamesReducer
  });

  //console.log("initialState:", initialState);

  var store = redux.createStore(reducers, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
};
