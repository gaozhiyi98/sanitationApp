import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../components/home/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../components/home/index/index.vue'),
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('../components/home/message/message.vue'),
      },
      {
        path: '/messageDetail',
        name: 'messageDetail',
        component: () => import('../components/home/message/messageDetail.vue'),
      },
      {
        path: '/showdata',
        name: 'showdata',
        component: () => import('../components/home/showdata/showdata.vue'),
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
        path: '/inspectionAdd',
        name: 'inspectionAdd',
        component: () => import('../components/home/inspection/inspectionAdd.vue'),
      },
      {
        path: '/quality',
        name: 'quality',
        component: () => import('../components/home/quality/quality.vue'),
      },
      {
        path: '/qualityDetail',
        name: 'qualityDetail',
        component: () => import('../components/home/quality/qualityDetail.vue'),
      },
      {
        path: '/qualityDeal',
        name: 'qualityDeal',
        component: () => import('../components/home/quality/qualityDeal.vue'),
      },
      {
        path: '/materials',
        name: 'materials',
        component: () => import('../components/home/materials/materials.vue'),
      },
      {
        path: '/materialsDetail',
        name: 'materialsDetail',
        component: () => import('../components/home/materials/materialsDetail.vue'),
      },
    ]
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
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/more/about.vue'),
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../components/more/update.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
