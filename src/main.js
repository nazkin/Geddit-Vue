import Vue from 'vue';
import 'buefy/dist/buefy.css';
import Buefy from 'buefy';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee, faThumbsUp, faThumbsDown, faPlus, faLightbulb, faSearch, faComments,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './isAuth';
import App from './App.vue';
import router from './router';
import store from './store';

library.add([faCoffee, faThumbsDown, faThumbsUp, faPlus, faLightbulb, faSearch, faComments]);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
