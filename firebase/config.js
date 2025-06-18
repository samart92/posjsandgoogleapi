// Replace this with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB88Dj-Bo3qbEN4aCPh6OAYGum2eoTO1LY",
    authDomain: "webappjs-2734d.firebaseapp.com",
    databaseURL: "https://webappjs-2734d-default-rtdb.firebaseio.com",
    projectId: "webappjs-2734d",
    storageBucket: "webappjs-2734d.firebasestorage.app",
    messagingSenderId: "692504868227",
    appId: "1:692504868227:web:9507603b6433d4cc4df2b6",
    measurementId: "G-11134DH3YS",
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.database();
