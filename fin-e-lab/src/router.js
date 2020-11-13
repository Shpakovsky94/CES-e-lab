import Vue from 'vue';
import Router from 'vue-router';
import Meta from "vue-meta";
import Logo from './views/Logo.vue'


Vue.use(Meta);
Vue.use(Router);

export const router = new Router(
    {
        mode: 'history',
        routes: [
        {
            path: '/',
            component: Logo
        }
        ]
      }
    );


    