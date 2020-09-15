/* eslint-disable */
import { firestoreAction } from 'vuexfire';
import firebase from 'firebase';
import db from '../db';

const dbComments = db.collection('comments');

const state = {
  post: {},
  comments: [],
};

const getters = {
  postObj: (state) => (state.post[0] ? state.post[0] : {})
}

const actions = {
  async createComment({getters}, comment) {
    const finalComment = {
      ...comment,
    };
    const res = await dbComments.doc();
    finalComment.id = res.id;
    finalComment.post_id = getters.postObj.id;
    finalComment.created_at = firebase.firestore.FieldValue.serverTimestamp();
    finalComment.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    finalComment.user_id = firebase.auth().currentUser.uid;
    await dbComments.doc(finalComment.id).set(finalComment);
  },
  initPostView: firestoreAction(({ bindFirestoreRef }, postId) => {
    bindFirestoreRef('post', db.collection('posts').where('id', '==', postId));
  }),
  initComments: firestoreAction(({ bindFirestoreRef }, postId) => {
    bindFirestoreRef('comments', db.collection('comments').where('post_id', '==', postId));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
