<template>
  <body>
    <nav class="navbar navbar-expand navbar-dark bg-dark header">
      <a class="navbar-brand" href="/">FIN-e-lab</a>
    </nav>

    <div class="grid-container">
      <div class="left">
        <ul>
          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenPlanning = !isHiddenPlanning"
              class="changeLiBackgroundColor"
            >
              00 - Planning
            </a>
            <ul v-if="!isHiddenPlanning">
              <li>
                <router-link to="/planning/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenRakNotes = !isHiddenRakNotes"
              class="changeLiBackgroundColor"
              >01 - RAK notes</a
            >

            <ul v-if="!isHiddenRakNotes">
              <li>
                <router-link to="/rak-notes/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenArkNotes = !isHiddenArkNotes"
              class="changeLiBackgroundColor"
              >02 - ARK notes
            </a>

            <ul v-if="!isHiddenArkNotes">
              <li>
                <router-link to="/ark-notes/general-notes">
                  00 - General notes
                </router-link>
              </li>
              <li>
                <router-link to="/ark-notes/elpo">
                  01 - ELPO
                </router-link>
              </li>
            </ul>
          </li>
          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenEle = !isHiddenEle"
              class="changeLiBackgroundColor"
            >
              03 - ELE (subcontractor Elements)
            </a>
            <ul v-if="!isHiddenEle">
              <li>
                <router-link to="/ele/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenKPH = !isHiddenKPH"
              class="changeLiBackgroundColor"
            >
              04 - KPH prefabricated bathrooms
            </a>
            <ul v-if="!isHiddenKPH">
              <li>
                <router-link to="/kph/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenRei = !isHiddenRei"
              class="changeLiBackgroundColor"
            >
              05 - REI notes
            </a>
            <ul v-if="!isHiddenRei">
              <li>
                <router-link to="/rei/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenSah = !isHiddenSah"
              class="changeLiBackgroundColor"
              >06 - SAH notes
            </a>
            <ul v-if="!isHiddenSah">
              <li>
                <router-link to="/sah/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenPor = !isHiddenPor"
              class="changeLiBackgroundColor"
            >
              07 - POR Porras (Stairs)
            </a>
            <ul v-if="!isHiddenPor">
              <li>
                <router-link to="/por/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenVss = !isHiddenVss"
              class="changeLiBackgroundColor"
            >
              08 - VSS Väestönsuoja (Bomb Shelter)
            </a>
            <ul v-if="!isHiddenVss">
              <li>
                <router-link to="/vss/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenVSection = !isHiddenVSection"
              class="changeLiBackgroundColor"
              >09 - V- elements
            </a>
            <ul v-if="!isHiddenVSection">
              <li>
                <router-link to="/v-element/standard-operating-procedure">
                  Standard operating procedure
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/general-notes/cassette">
                  0_0 General notes Cassette casting
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/general-notes/table">
                  0_0 General notes Table casting
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-general-notes">
                  1_0 Modeling General notes
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-walls-devision">
                  1_1_1 Modeling walls devision
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-shape">
                  1_1 Modeling Shape
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-components">
                  1_2 Modeling Component
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-nostolenkit">
                  1_3 Modeling NOSTOLENKIT (Lifting anchors)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-kaideholkit">
                  1_4 Modeling KAIDEHOLKIT (Safety barriers)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-tapit">
                  1_5 Modeling TAPIT (Vertical dowels)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-ura">
                  1_6 Modeling URA (Vertical seams)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-avk">
                  1_7 Modeling AVK (Recesses for dowels)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-painepesu">
                  1_8 Modeling PAINEPESU (Pressure wash)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-vemo">
                  1_9 Modeling VEMO
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-hk-ha-hy">
                  1_10 Modeling HK/HA/HY (Lift shaht elements)
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/modeling-lippa">
                  1_11 Modeling LIPPA
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/calculation">
                  2 Calculation
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/reinforcing">
                  3 Reinforcing
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/reika">
                  4 REIKA Openings task
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/sewatek">
                  5 SEWATEK
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/sah">
                  6 SÄH Electricity
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenLSection = !isHiddenLSection"
              class="changeLiBackgroundColor"
            >
              10 - L- elements
            </a>

            <ul v-if="!isHiddenLSection">
              <li>
                <router-link to="/l-element/standard-operating-procedure">
                  Standard operating procedure
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/general-notes">
                  00 - General notes
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/modeling-general-notes">
                  1_0_Modeling_General_notes
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/modeling-slabs-division">
                  1_1_1_Modeling_slabs_division
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/modeling-shape">
                  1_1_Modeling_Shape
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/modeling-nostolenkit">
                  1_2_Modeling_NOSTOLENKIT_(Lifting_anchors)
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/calculation">
                  2_Calculation
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/reinforcing">
                  3_Reinforcing
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/rei">
                  4_REIKA_Openings_task
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenOSection = !isHiddenOSection"
              class="changeLiBackgroundColor"
              >11 - O- elements
            </a>
            <ul v-if="!isHiddenOSection">
              <li>
                <router-link to="/o-element/standard-operating-procedure">
                  Standard operating procedure
                </router-link>
              </li>
              <li>
                <router-link to="/o-element/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenHKU_HY_HA = !isHiddenHKU_HY_HA"
              class="changeLiBackgroundColor"
            >
              12 - HKU/HY/HA- elements
            </a>
            <ul v-if="!isHiddenHKU_HY_HA">
              <li>
                <router-link to="/hku-hy-ha/general-notes">
                  00 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenComponentDes = !isHiddenComponentDes"
              class="changeLiBackgroundColor"
            >
              13 - Components description
            </a>
            <ul v-if="!isHiddenComponentDes">
              <li>
                <a
                  v-on:click="
                    isHiddenComponentDesValiseina = !isHiddenComponentDesValiseina
                  "
                  class="changeLiBackgroundColor"
                >
                  3. VÄLISEINÄ (Inner wall)
                </a>
                <ul v-if="!isHiddenComponentDesValiseina">
                  <li>
                    <a
                      v-on:click="
                        isHiddenComponentDesValiseinaRadoitukset = !isHiddenComponentDesValiseinaRadoitukset
                      "
                      class="changeLiBackgroundColor"
                    >
                      3_3 RAUDOITUKSET
                    </a>
                    <ul v-if="!isHiddenComponentDesValiseinaRadoitukset">
                      <li>
                        <router-link to="/components/xpar-kutistumisraudoite">
                          xpar_KUTISTUMISRAUDOITE
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      v-on:click="
                        isHiddenComponentDesValiseinaRei = !isHiddenComponentDesValiseinaRei
                      "
                      class="changeLiBackgroundColor"
                    >
                      3_4 REIÄT
                    </a>
                    <ul v-if="!isHiddenComponentDesValiseinaRei">
                      <li>
                        <router-link to="/components/xpar-hanakulma">
                          xpar_HANAKULMA
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/components/xpar-iw-ura">
                          xpar_IW_URA
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  v-on:click="
                    isHiddenComponentDesSah = !isHiddenComponentDesSah
                  "
                  class="changeLiBackgroundColor"
                >
                  5. SÄH
                </a>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              v-on:click="isHiddenDrawingSection = !isHiddenDrawingSection"
              class="changeLiBackgroundColor"
              >14 - Drawings
            </a>
            <ul v-if="!isHiddenDrawingSection">
              <li>
                <router-link to="/drawings/revision">
                  Revision
                </router-link>
              </li>

              <li class="changeBackgroundPointer">
                <a
                  v-on:click="
                    isHiddenGaDrawingSection = !isHiddenGaDrawingSection
                  "
                  class="changeLiBackgroundColor"
                  >GA-
                </a>
                <ul v-if="!isHiddenGaDrawingSection">
                    <a target="_blank"
                    href="https://consolis-my.sharepoint.com/:f:/p/oleksandr_shpakovskyi/Ev3yIcv3cBBAllt9h_zeXycBfKBOIBTxH5HHJzu295AxOA?e=61TW4W"
                    >Example drawings
                  </a>
                  <li>
                    <router-link to="/drawings/ga-drawings/checklist">
                      Drawing checklist
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/ga-drawings/general-notes">
                      0_0 General notes
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/ga-drawings/tapit">
                      0_1 Drawings tapit
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="changeBackgroundPointer">
                <a
                  v-on:click="
                    isHiddenLDrawingSection = !isHiddenLDrawingSection
                  "
                  class="changeLiBackgroundColor"
                  >L-
                </a>
                <ul v-if="!isHiddenLDrawingSection">
                  <a target="_blank"
                    href="https://consolis-my.sharepoint.com/:f:/p/oleksandr_shpakovskyi/ErNmF5IqAQpHkdO527335YQBoAzu6Hwqtqcv1_ULGhytBw?e=qdbccU"
                    >Example drawings
                  </a>
                  <li>
                    <router-link to="/drawings/l-drawings/checklist">
                      Drawing checklist
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/l-drawings/general-notes">
                      0_0 General notes
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="changeBackgroundPointer">
                <a
                  v-on:click="
                    isHiddenVDrawingSection = !isHiddenVDrawingSection
                  "
                  class="changeLiBackgroundColor"
                  >V-
                </a>
                <ul v-if="!isHiddenVDrawingSection">
                  <a
                    target="_blank"
                    href="https://consolis-my.sharepoint.com/:f:/p/oleksandr_shpakovskyi/EkYjuxw9m65OooHwJi8zmL4BbqHj2a75dOQPKjJR0KMQzg?e=PryzE2"
                    >Example drawings
                  </a>
                  <li>
                    <router-link to="/drawings/v-drawings/checklist">
                      Drawing checklist
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/v-drawings/general-notes">
                      0_0 General notes
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/v-drawings/drawing-creation">
                      1_0_1 Drawing Creation
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/v-drawings/drawing-vertical-section">
                      1_0_2 Drawing Vertical section
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/v-drawings/drawing-horizontal-section">
                      1_0_3 Drawing Horizontal section
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/drawings/v-drawings/drawing-front-view">
                      1_0_4 Drawing Front view
                    </router-link>
                  </li>

                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="right">
        <div>
          <router-view />
        </div>
      </div>

      <div class="footer">
        <div class="row">
          <div class="col-md">
            <p class="pull-left">
              <small>
                © 2020 - FIN Parma Handbook v1.0
              </small>
            </p>
          </div>
          <div class="col-md-6">
            <p style="text-align:right">
              <small>
                Designed and developed by OSI
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isHiddenPlanning: true,
      isHiddenRakNotes: true,
      isHiddenArkNotes: true,
      isHiddenEle: true,
      isHiddenKPH: true,
      isHiddenRei: true,
      isHiddenSah: true,
      isHiddenPor: true,
      isHiddenVss: true,
      isHiddenVSection: true,
      isHiddenLSection: true,
      isHiddenOSection: true,
      isHiddenHKU_HY_HA: true,
      isHiddenComponentDes: true,
      isHiddenComponentDesValiseina: true,
      isHiddenComponentDesValiseinaRadoitukset: true,
      isHiddenComponentDesValiseinaRei: true,
      isHiddenComponentDesSah: true,
      isHiddenDrawingSection: true,
      isHiddenGaDrawingSection: true,
      isHiddenLDrawingSection: true,
      isHiddenVDrawingSection: true,
    };
  },
  methods: {
    hide() {},
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  position: sticky;
  top: 0;
  width: 100%;
}

/* The grid container */
.grid-container {
  display: grid;
  grid-template-areas:
    "left right"
    "footer footer";
  grid-template-columns: 25% 75%;
}

.left,
.right {
  padding: 10px;
}

/* Style the left column */
.left {
  grid-area: left;
  background-color: white;
  border-right: 15px solid #343a40;
}

/* Style the right column */
.right {
  background-color: white;
  grid-area: right;
}

/* Style the footer */
.footer {
  grid-area: footer;
  background-color: #f1f1f1;
  padding: 10px;
  width: 100%;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .grid-container {
    grid-template-areas:
      "left right"
      "footer footer";
  }
}

.folder-indicator {
  right: 0;
  top: 2px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 17px;
  height: 17px;
  background-color: #f6f7f8;
  border-radius: 1px;
}

.changeBackgroundPointer {
  cursor: pointer;
}

.changeLiBackgroundColor:hover {
  background-color: #cbd1d7;
  border-radius: 5px;
}

li {
  color: #3f3f3f;
  padding-top: 5px;
}
</style>
