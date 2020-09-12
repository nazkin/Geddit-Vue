/* eslint-disable */
import { firestoreAction } from 'vuexfire';
import firebase from 'firebase';
import db from '../db';

const dbComments = db.collection('comments');

const state = {
  post: [],
  comments: [],
};

const actions = {
  async createComment({state}, comment) {
    const finalComment = {
      ...comment,
    };
    const res = await dbComments.doc();
    finalComment.id = res.id;
    finalComment.post_id = state.post.id;
    finalComment.created_at = firebase.firestore.FieldValue.serverTimestamp();
    finalComment.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    finalComment.user_id = firebase.auth().currentUser.uid;
    await dbComments.doc(finalPost.id).set(finalPost);
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
};
