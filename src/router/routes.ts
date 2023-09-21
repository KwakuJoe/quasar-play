import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'login',
        component: () => import('src/pages/DictionaryPage.vue')
      },
      {
        path: 'users',
        component: () => import('src/pages/TranslatorPage.vue')
      },
      {
        path: 'three',
        component: () => import('pages/ThreePage.vue')
      }
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
