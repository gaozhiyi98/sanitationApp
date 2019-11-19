import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home/home.vue'),
  },
  {
    path: '/inspection',
    name: 'inspection',
    component: () => import('../components/inspection/inspection.vue'),
  },
  {
    path: '/addressbook',
    name: 'addressbook',
    component: () => import('../components/addressbook/addressbook.vue'),
  },
  {
    path: '/quality',
    name: 'quality',
    component: () => import('../components/quality/quality.vue'),
  },
  {
    path: '/materials',
    name: 'materials',
    component: () => import('../components/materials/materials.vue'),
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../components/more/more.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
