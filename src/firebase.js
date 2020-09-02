import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBi-7ZKl-lvI_eu90M4ZA5Tw1nm8mDBJ3E',
  authDomain: 'geddit-clone.firebaseapp.com',
  databaseURL: 'https://geddit-clone.firebaseio.com',
  projectId: 'geddit-clone',
  storageBucket: 'geddit-clone.appspot.com',
  messagingSenderId: '492370832748',
  appId: '1:492370832748:web:2c3914e739b993f1f91749',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
