import firebase, {firebaseRef, githubProvider} from '../api/firebase/index.js';
import moment from 'moment';


export var incRoundNum = () => {
  return {
    type: 'INCREMENT_ROUND_NUM'
  };
};

export var decRoundNum = () => {
  return {
    type: 'DECREMENT_ROUND_NUM'
  };
};

export var setRoundNum = (round_num) => {
  console.log("setRoundNum:", typeof(round_num));
  return {
    type: 'SET_ROUND_NUM',
    round_num: round_num
  };
};


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  };
};


export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  }
};

/*
export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos
  }
};
*/

export var addTeams = (teams) => {
  return {
    type: 'ADD_TEAMS',
    teams: teams
  }
};


export var startAddTeams = () => {
  console.log('startAddTeams...');
  return (dispatch, getState) => {

    //Updated Firebase schema bu uid
    //var todosRef = firebaseRef.child('todos');
    var uid = getState().auth.uid;
    var teamsRef = firebaseRef.child(`/teams`);

    return teamsRef.once('value').then((snapshot) => {
      var teams = snapshot.val() || {};
      console.log('snapshot.val() teams', teams);
      var parsedTeams = [];

      //translate to an array
      Object.keys(teams).forEach( (teamId) => {
        parsedTeams.push({
          id: teamId,
          ...teams[teamId]
        });

      });
      console.log('parsedTeams:', parsedTeams);
      dispatch(addTeams(parsedTeams));
    });

  };
};

export var addGames = (games) => {
  return {
    type: 'ADD_GAMES',
    games: games
  }
};

export var startAddGames = () => {
  console.log('startAddGames...');
  return (dispatch, getState) => {

    //Updated Firebase schema bu uid
    //var todosRef = firebaseRef.child('todos');
    var uid = getState().auth.uid;
    var gamesRef = firebaseRef.child(`/games`);

    return gamesRef.once('value').then((snapshot) => {
      var games = snapshot.val() || {};
      console.log('snapshot.val() games', games);
      var parsedGames = [];

      //translate to an array
      Object.keys(games).forEach( (gameId) => {
        parsedGames.push({
          id: gameId,
          ...games[gameId]
        });

      });
      console.log('parsedGames:', parsedGames);
      dispatch(addGames(parsedGames));
    });

  };
};


// asynch actions
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      //id: uuid(), generated in the db call
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    console.log("todo:", todo);
    //var todoRef = firebaseRef.child('todos').push(todo);
    //Updated Firebase schema bu uid
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then( () => {
      console.log("todoRef.key:", todoRef.key);
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });

  };
};


export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};


export var setShowCompleted = (showCompletedState) => {
  return {
    type: 'SET_SHOW_COMPLETED',
    showCompleted: showCompletedState
  }
};
/*
export var getShowCompleted = () => {
  return {
    type: 'GET_SHOW_COMPLETED',
    showCompleted: showCompletedState
  }
};
*/

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates
  }
};


export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos/' + id);
    // Using ES6 template strings

    //Updated Firebase schema bu uid
    //var todoRef = firebaseRef.child(`todos/${id}`);
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then( () => {
      dispatch(updateTodo(id, updates));
    });

  };
};


export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  };
};


export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};


export var startGitHubLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked...", result);
    }, (error) => {
      console.log("Unable to auth", error);
    });
  };
};


export var startEmailLogin = (email, password) => {
  return (dispatch, getState) => {
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var testEmail = "aqwerty543@gmail.com";
    var testPassword = "wally123";
    firebase.auth().signInWithEmailAndPassword(testEmail, testPassword).then((result) => {
    //firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked...", result);
    }, (error) => {
      console.log("Unable to auth", error);
    });
  };
};


export var registerUser = (email, password) => {
  return (dispatch, getState) => {
    var testEmail = "aqwerty543@gmail.com";
    var testPassword = "aqwerty543";
  /*return firebase.auth().createUserWithEmailAndPassword(testEmail, testPassword)
    .then(saveUser)
    .catch((error) => console.log('Oops - Error registering user:', error))*/
    firebase.auth().createUserWithEmailAndPassword(testEmail, testPassword).then((result) => {
      saveUser(result);
      console.log("Registration worked...", result);
    }, (error) => {
      console.log("Unable to register", error);
    });
  };
};

export function saveUser (user) {
  console.log("User:", user);
  return firebaseRef.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}


////
/*
import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
*/

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then( () => {
      console.log("Logged out...");
    });
  };
};
