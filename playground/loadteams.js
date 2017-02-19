//import firebase from 'firebase';
//import firebase, {firebaseRef, githubProvider} from '../src/api/firebase/index.js';

var firebase = require('firebase');
var env = require('node-env-file');

// Load any undefined ENV variables form a specified file.
env('../config/development.env');

try {

  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };


} catch (e) {

}

firebase.initializeApp(config);

console.log('authDomain:', config.authDomain);

var firebaseRef = firebase.database().ref();

const teams = [
  {
    name: 'Adelaide',
    nickname: 'Crows',
    sname: 'ADE'
  },
  {
    name: 'Brisbane',
    nickname: 'Bears',
    sname: 'BRI'
  },
  {
    name: 'Carlton',
    nickname: 'Blues',
    sname: 'CAR'
  },
  {
    name: 'Collingwood',
    nickname: 'Magpies',
    sname: 'COL'
  },
  {
    name: 'Essendon',
    nickname: 'Bombers',
    sname: 'ESS'
  },
  {
    name: 'Fremantle',
    nickname: 'Dockers',
    sname: 'FRE'
  },
  {
    name: 'Geelong',
    nickname: 'Cats',
    sname: 'GEE'
  },
  {
    name: 'Gold Coast',
    nickname: 'Suns',
    sname: 'GCS'
  },
  {
    name: 'Greater Western Sydney',
    nickname: 'Giants',
    sname: 'GWS'
  },
  {
    name: 'Hawthorn',
    nickname: 'Hawks',
    sname: 'HAW'
  },
  {
    name: 'Melbourne',
    nickname: 'Demons',
    sname: 'MEL'
  },
  {
    name: 'North Melbourne',
    nickname: 'Kangaroos',
    sname: 'NTH'
  },
  {
    name: 'Port Adelaide',
    nickname: 'Power',
    sname: 'PTA'
  },
  {
    name: 'Richmond',
    nickname: 'Tigers',
    sname: 'RIC'
  },
  {
    name: 'St Kilda',
    nickname: 'Saints',
    sname: 'STK'
  },
  {
    name: 'Sydney',
    nickname: 'Swans',
    sname: 'SYD'
  },
  {
    name: 'West Coast',
    nickname: 'Eagles',
    sname: 'WCE'
  },
  {
    name: 'Western Bulldogs',
    nickname: 'Bulldogs',
    sname: 'WBU'
  }
];

//var dataRef = firebaseRef.child(`/teams`).set(teams);
var dataRef = firebaseRef.child(`/teams`);

dataRef.set(teams, function(error) {
  if (error) {
    console.log("Data could not be saved.", error);
  } else {
    console.log("Data saved successfully.");
      return (1);
  }
});
