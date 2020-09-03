import firebase from '../firebase';

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(_, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    }
  },
  removeUser() {
    state.user = {};
    state.isLoggedIn = false;
  },
};

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async signout() {
    await firebase.auth().signOut();
  },
};

export default {
  namespaced: true,
  mutations,
  state,
  actions,
};
