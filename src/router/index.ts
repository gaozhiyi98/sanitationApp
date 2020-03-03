import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../page/home/home.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../page/home/message/message.vue'),
  },
  {
    path: '/messageDetail',
    name: 'messageDetail',
    component: () => import('../page/home/message/messageDetail.vue'),
  },
  {
    path: '/showdata',
    name: 'showdata',
    component: () => import('../page/home/showdata/showdata.vue'),
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: () => import('../page/home/monitor/monitor.vue'),
  },
  {
    path: '/inspection',
    name: 'inspection',
    component: () => import('../page/home/inspection/inspection.vue'),
  },
  {
    path: '/inspectionList',
    name: 'inspectionList',
    component: () => import('../page/home/inspection/inspectionList.vue'),
  },
  {
    path: '/inspectionAdd',
    name: 'inspectionAdd',
    component: () => import('../page/home/inspection/inspectionAdd.vue'),
  },
  {
    path: '/quality',
    name: 'quality',
    component: () => import('../page/home/quality/quality.vue'),
  },
  {
    path: '/qualityDetail',
    name: 'qualityDetail',
    component: () => import('../page/home/quality/qualityDetail.vue'),
  },
  {
    path: '/qualityDeal',
    name: 'qualityDeal',
    component: () => import('../page/home/quality/qualityDeal.vue'),
  },
  {
    path: '/materials',
    name: 'materials',
    component: () => import('../page/home/materials/materials.vue'),
  },
  {
    path: '/materialsDetail',
    name: 'materialsDetail',
    component: () => import('../page/home/materials/materialsDetail.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../page/login/login.vue'),
  },
  {
    path: '/addressbook',
    name: 'addressbook',
    component: () => import('../page/addressbook/addressbook.vue'),
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../page/more/more.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../page/more/about.vue'),
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../page/more/update.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
