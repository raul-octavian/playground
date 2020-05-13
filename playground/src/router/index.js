import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Radek from "../views/Radek.vue";
import Johannes from '../views/Johannes';
import Raul from '../views/Raul';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/julia',
    name: 'Julia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "julia" */ '../views/Julia.vue'),
  },
  {
    path: '/radek',
    name: 'Radek',
    component: Radek,
  },
  {
    path: '/johannes',
    name: 'Johannes',
    component: Johannes,
  },
  {
    path: '/raul',
    name: 'Raul',
    component: Raul,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
