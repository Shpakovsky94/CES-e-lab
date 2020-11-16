import Vue from "vue";
import Router from "vue-router";
import Logo from "./views/Logo.vue";
import Planning_General_notes from "./views/0_Planning/0_General_notes.vue";
import RAK_notes_General_notes from "./views/1_RAK_notes/0_General_notes.vue";
import ARK_notes_General_notes from "./views/2_ARK_notes/0_General_notes.vue";
import ARK_notes_ELPO from "./views/2_ARK_notes/1_ELPO.vue";
import ELE_General_notes from "./views/3_ELE/0_General_notes.vue";
import KPH_General_notes from "./views/4_KPH/0_General_notes.vue";
import REI_General_notes from "./views/5_REI_notes/0_General_notes.vue";
import SAH_General_notes from "./views/6_SAH_notes/0_General_notes.vue";
import POR_General_notes from "./views/7_POR_Porras/0_General_notes.vue";
import VSS_General_notes from "./views/8_VSS/0_General_notes.vue";
import V_General_notes from "./views/9_V_elements/0_General_notes.vue";
import V_General_notes_Cassette from "./views/9_V_elements/0_0_General_notes_Cassette_casting.vue";
import V_General_notes_Table from "./views/9_V_elements/0_0_General_notes_Table_casting.vue";
import V_Modeling_General_notes from "./views/9_V_elements/1_0_Modeling_General_notes.vue";
import V_Modeling_Wall_Devision from "./views/9_V_elements/1_1_1_Modeling_walls_devision.vue";
import V_Modeling_Shape from "./views/9_V_elements/1_1_Modeling_Shape.vue";
import V_Modeling_Component from "./views/9_V_elements/1_2_Modeling_Component.vue";
import V_Modeling_Nostolenkit from "./views/9_V_elements/1_3_Modeling_NOSTOLENKIT.vue";
import V_Modeling_Kaideholkit from "./views/9_V_elements/1_4_Modeling_KAIDEHOLKIT.vue";
import V_Modeling_Tapit from "./views/9_V_elements/1_5_Modeling_TAPIT.vue";
import V_Modeling_Ura from "./views/9_V_elements/1_6_Modeling_URA.vue";
import V_Modeling_Avk from "./views/9_V_elements/1_7_Modeling_AVK.vue";
import V_Modeling_Painepesu from "./views/9_V_elements/1_8_Modeling_PAINEPESU.vue";
import V_Modeling_Vemo from "./views/9_V_elements/1_9_Modeling_VEMO.vue";
import V_Modeling_HK_HA_HY from "./views/9_V_elements/1_10_Modeling_HK_HA_HY.vue";
import V_Modeling_Lipa from "./views/9_V_elements/1_11_Modeling_LIPPA.vue";
import V_Calculation from "./views/9_V_elements/2_Calculation.vue";
import V_Reinforcing from "./views/9_V_elements/3_Reinforcing.vue";
import V_Reika from "./views/9_V_elements/4_REIKA_Openings_task.vue";
import V_Sewatek from "./views/9_V_elements/5_SEWATEK.vue";
import V_Sah from "./views/9_V_elements/6_SÄH_Electricity.vue";
import L_General_notes from "./views/10_L_elements/0_General_notes.vue";
import L_Modeling_General_notes from "./views/10_L_elements/1_0_Modeling_General_notes.vue";
import L_Modeling_Slabs_Devision from "./views/10_L_elements/1_1_1_Modeling_slabs_division.vue";
import L_Modeling_Shape from "./views/10_L_elements/1_1_Modeling_Shape";
import L_Modeling_Component from "./views/10_L_elements/1_2_Modeling_Component.vue";
import L_Modeling_Nostolenkit from "./views/10_L_elements/1_3_Modeling_NOSTOLENKIT.vue";
import L_Modeling_Kaideholkit from "./views/10_L_elements/1_4_Modeling_KAIDEHOLKIT.vue";
import L_Calculation from "./views/10_L_elements/2_Calculation.vue";
import L_Reinforcing from "./views/10_L_elements/3_Reinforcing.vue";
import L_Reika from "./views/10_L_elements/4_REIKA_Openings_task.vue";
import O_General_notes from "./views/11_O_elements/0_General_notes.vue";
import O_Modeling_notes from "./views/11_O_elements/1_Modeling_rules.vue";
import HKU_HY_HA_General_notes from "./views/12_HKU_HY_HA_elements/0_General_notes.vue";
import Component_xpar_KUTISTUMISRAUDOITE from "./views/13_Components_Description/3_VALISEINA/3_3_RAUDOITUKSET/xpar_KUTISTUMISRAUDOITE.vue";
import Component_xpar_HANAKULMA from "./views/13_Components_Description/3_VALISEINA/3_4_REIAT/xpar_HANAKULMA.vue";
import Component_xpar_IW_URA from "./views/13_Components_Description/3_VALISEINA/3_4_REIAT/xpar_IW_URA.vue";




Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Logo,
    },
    {
      path: "/planning/general-notes",
      component: Planning_General_notes,
    },
    {
      path: "/rak-notes/general-notes",
      component: RAK_notes_General_notes,
    },
    {
      path: "/ark-notes/general-notes",
      component: ARK_notes_General_notes,
    },
    {
      path: "/ark-notes/elpo",
      component: ARK_notes_ELPO,
    },
    {
      path: "/ele/general-notes",
      component: ELE_General_notes,
    },
    {
      path: "/kph/general-notes",
      component: KPH_General_notes,
    },
    {
      path: "/rei/general-notes",
      component: REI_General_notes,
    },
    {
      path: "/sah/general-notes",
      component: SAH_General_notes,
    },
    {
      path: "/por/general-notes",
      component: POR_General_notes,
    },
    {
      path: "/vss/general-notes",
      component: VSS_General_notes,
    },
    {
      path: "/v-element/general-notes",
      component: V_General_notes,
    },
    {
      path: "/v-element/general-notes/cassette",
      component: V_General_notes_Cassette,
    },
    {
      path: "/v-element/general-notes/table",
      component: V_General_notes_Table,
    },
    {
      path: "/v-element/modeling-general-notes",
      component: V_Modeling_General_notes,
    },
    {
      path: "/v-element/modeling-walls-devision",
      component: V_Modeling_Wall_Devision,
    },
    {
      path: "/v-element/modeling-shape",
      component: V_Modeling_Shape,
    },
    {
      path: "/v-element/modeling-components",
      component: V_Modeling_Component,
    },
    {
      path: "/v-element/modeling-nostolenkit",
      component: V_Modeling_Nostolenkit,
    },
    {
      path: "/v-element/modeling-kaideholkit",
      component: V_Modeling_Kaideholkit,
    },
    {
      path: "/v-element/modeling-tapit",
      component: V_Modeling_Tapit,
    },
    {
      path: "/v-element/modeling-ura",
      component: V_Modeling_Ura,
    },
    {
      path: "/v-element/modeling-avk",
      component: V_Modeling_Avk,
    },
    {
      path: "/v-element/modeling-painepesu",
      component: V_Modeling_Painepesu,
    },
    {
      path: "/v-element/modeling-vemo",
      component: V_Modeling_Vemo,
    },
    {
      path: "/v-element/modeling-hk-ha-hy",
      component: V_Modeling_HK_HA_HY,
    },
    {
      path: "/v-element/modeling-lippa",
      component: V_Modeling_Lipa,
    },
    {
      path: "/v-element/calculation",
      component: V_Calculation,
    },
    {
      path: "/v-element/reinforcing",
      component: V_Reinforcing,
    },
    {
      path: "/v-element/reika",
      component: V_Reika,
    },
    {
      path: "/v-element/sewatek",
      component: V_Sewatek,
    },
    {
      path: "/v-element/sah",
      component: V_Sah,
    },
    {
      path: "/l-element/general-notes",
      component: L_General_notes,
    },
    {
      path: "/l-element/modeling-general-notes",
      component: L_Modeling_General_notes,
    },
    {
      path: "/l-element/modeling-slabs-division",
      component: L_Modeling_Slabs_Devision,
    },
    {
      path: "/l-element/modeling-shape",
      component: L_Modeling_Shape,
    },
    {
      path: "/l-element/modeling-component",
      component: L_Modeling_Component,
    },
    {
      path: "/l-element/modeling-nostolenkit",
      component: L_Modeling_Nostolenkit,
    },
    {
      path: "/l-element/modeling-kaideholkit",
      component: L_Modeling_Kaideholkit,
    },
    {
      path: "/l-element/calculation",
      component: L_Calculation,
    },
    {
      path: "/l-element/reinforcing",
      component: L_Reinforcing,
    },
    {
      path: "/l-element/rei",
      component: L_Reika ,
    },
    {
      path: "/o-element/general-notes",
      component: O_General_notes,
    },
    {
      path: "/o-element/modeling-notes",
      component: O_Modeling_notes,
    },
    {
      path: "/hku-hy-ha/general-notes",
      component: HKU_HY_HA_General_notes,
    },
    {
      path: "/components/xpar-kutistumisraudoite",
      component: Component_xpar_KUTISTUMISRAUDOITE,
    },
    {
      path: "/components/xpar-hanakulma",
      component: Component_xpar_HANAKULMA,
    },
    {
      path: "/components/xpar-iw-ura",
      component: Component_xpar_IW_URA,
    },
  ],
});
