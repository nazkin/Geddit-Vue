import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Subpost from '../views/Subpost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/subpost',
    name: 'Subpost',
    component: Subpost,
  },
  {
    path: '/g/:post',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
  },
  {
    path: '/g/:post/:post_id',
    name: 'ViewPost',
    component: () => import('../views/ViewPost.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
