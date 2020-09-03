import firebase from './firebase';
import store from './store';
import db from './db';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // user signed in

    console.log(user.uid);
    const newUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(newUser.id).set(newUser);
    store.commit('auth/setUser', newUser);
  } else {
    // not signed in
    store.commit('auth/removeUser');
  }
});
