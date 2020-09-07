/* eslint-disable */
import { firestoreAction } from 'vuexfire';
import firebase from 'firebase';
import db from '../db';

const dbPosts = db.collection('posts');

const state = {
  subposts: [],
  posts: [],
};
const getters = {
  subpost: (s) => (s.subposts[0] ? s.subposts[0] : {}),
};
const actions = {
  async createPost({ getters },post) {
    const finalPost = {
      ...post,
    };
    const res = await dbPosts.doc();
    finalPost.id = res.id;
    finalPost.subpost_id = getters.subpost.id;
    finalPost.created_at = firebase.firestore.FieldValue.serverTimestamp();
    finalPost.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    finalPost.user_id = firebase.auth().currentUser.uid;
    await dbPosts.doc(finalPost.id).set(finalPost);
  },
  initSubpost: firestoreAction(({ bindFirestoreRef }, name) => {
    bindFirestoreRef('subposts', db.collection('subposts').where('name', '==', name));
  }),
  initPost: firestoreAction(({ bindFirestoreRef }, subId) => {
    bindFirestoreRef('posts', db.collection('posts').where('subpost_id', '==', subId));
  }),

};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
