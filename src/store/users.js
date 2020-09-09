/* eslint-disable */
import { firestoreAction } from 'vuexfire';
import db from '../db';

const store = {
  users: [],
};

const getters = {
    usersWithId: (state) => {
        return state.users.reduce((byId, user) => {
            byId[user.id] = user;
            return byId;
    }, {});
    }
}

const actions = {
  initUsers: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', db.collection('users'));
  }),
};

export default {
  namespaced: true,
  store,
  actions,
  getters,
};
