import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
import auth from './auth';
import subposts from './subposts';
import posts from './posts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
  },
  modules: {
    auth,
    subposts,
    posts,
  },
});
