import Vue from 'vue';
import Router from 'vue-router';
import Planning_General_notes from './views/0_Planning/0_General_notes.vue'
import RAK_notes_General_notes from './views/1_RAK_notes/0_General_notes.vue'
import ARK_notes_General_notes from './views/2_ARK_notes/0_General_notes.vue'
import ARK_notes_ELPO from './views/2_ARK_notes/1_ELPO.vue'

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
        },
        {
            path: '/ark-notes/general-notes',
            component: ARK_notes_General_notes
        },
        {
            path: '/ark-notes/elpo',
            component: ARK_notes_ELPO
        }
        ]
      }
    );


    