import { firestoreAction } from 'vuexfire';
import db from '../db';

const state = {
  subposts: [],
};

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('subposts', db.collection('subposts'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};
