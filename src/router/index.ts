import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'home',
    component: () => import('../components/home/index.vue'),
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: () => import('../components/home/monitor/monitor.vue'),
  },
  {
    path: '/inspection',
    name: 'inspection',
    component: () => import('../components/home/inspection/inspection.vue'),
  },
  {
    path: '/quality',
    name: 'quality',
    component: () => import('../components/home/quality/quality.vue'),
  },
  {
    path: '/materials',
    name: 'materials',
    component: () => import('../components/home/materials/materials.vue'),
  },
  {
    path: '/addressbook',
    name: 'addressbook',
    component: () => import('../components/addressbook/addressbook.vue'),
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../components/more/more.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
