import Vue from 'vue';
import Router from 'vue-router';
import Planning_General_notes from './views/0_Planning/0_General_notes.vue'
import RAK_notes_General_notes from './views/1_RAK_notes/0_General_notes.vue'
import ARK_notes_General_notes from './views/2_ARK_notes/0_General_notes.vue'
import ARK_notes_ELPO from './views/2_ARK_notes/1_ELPO.vue'
import ELE_General_notes from './views/3_ELE/0_General_notes.vue'
import KPH_General_notes from './views/4_KPH/0_General_notes.vue'
import REI_General_notes from './views/5_REI_notes/0_General_notes.vue'
import SAH_General_notes from './views/6_SAH_notes/0_General_notes.vue'

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
        },
        {
            path: '/ele/general-notes',
            component: ELE_General_notes
        },
        {
            path: '/kph/general-notes',
            component: KPH_General_notes
        },
        {
            path: '/rei/general-notes',
            component: REI_General_notes
        },
        {
            path: '/sah/general-notes',
            component: SAH_General_notes
        }
        ]
      }
    );


    