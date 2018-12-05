import firebase from 'firebase'

  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyBL_SttDz78ZpAbEWHOi_UCV7a3cshzuoo",
    authDomain: "investmentapp-9cb37.firebaseapp.com",
    databaseURL: "https://investmentapp-9cb37.firebaseio.com",
    projectId: "investmentapp-9cb37",
    storageBucket: "investmentapp-9cb37.appspot.com",
    messagingSenderId: "195957508467"
  };
  firebase.initializeApp(config);
  export default firebase;