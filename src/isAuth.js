import firebase from './firebase';
import store from './store';
import db from './db';
import router from './router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // user signed in
    const newUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(newUser.id).set(newUser);
    store.commit('auth/setUser', newUser);
    router.push('/subpost').catch((err) => {
      console.log(err);
    });
  } else {
    // not signed in
    store.commit('auth/removeUser');
  }
});
