import firebase from '../firebase';
import db from '../db';

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(user) {
    state.user = user;
  },
};

const actions = {
  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    const newUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(newUser.id).set(newUser);
    commit('setUser', newUser);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
