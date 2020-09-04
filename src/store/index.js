import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
import auth from './auth';
import subposts from './subposts';

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
  },
});
