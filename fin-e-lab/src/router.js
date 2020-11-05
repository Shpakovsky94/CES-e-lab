import Vue from 'vue';
import Router from 'vue-router';
import Planning_General_notes from './views/0_Planning/0_General_notes.vue'
import RAK_notes_General_notes from './views/1_RAK_notes/0_General_notes.vue'

Vue.use(Router);

export const router = new Router(
    {
        mode: 'history',
        routes: [
          {
            path: '/planning/general-notes',
            component: Planning_General_notes
        },
        {
            path: '/rak-notes/general-notes',
            component: RAK_notes_General_notes
        }
        ]
      }
    );


    