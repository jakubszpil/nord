import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home } from '../views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/oferta',
    name: 'Oferta',
    component: () => import('../views/Offer.vue'),
  },
  {
    path: '/promocje',
    name: 'Promocje',
    component: () => import('../views/Discounts.vue'),
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/oferta/:slug',
    component: () => import('../views/detail/Offer__Details.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
