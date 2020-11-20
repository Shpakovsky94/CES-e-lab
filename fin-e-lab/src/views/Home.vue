<template>
  <body>
    <nav class="navbar navbar-expand navbar-dark bg-dark header">
      <a class="navbar-brand" href="/">CES-FIN</a>
    </nav>

    <div class="grid-container">
      <div class="left">
        <ul>

          <li class="changeBackgroundPointer " v-if="this.heading1 != '0'">
            <a
              id="heading1"
              class="changeLiBackgroundColor"
            ></a>
            <ul class="ul_submenu">
              <li v-if="this.sub1_1 != '0'">
                <router-link to="/heading1/sub1-1">
                  <span id="sub1_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_2 != '0'">
                <router-link to="/heading1/sub1-2">
                  <span id="sub1_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_3 != '0'">
                <router-link to="/heading1/sub1-3">
                  <span id="sub1_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_4 != '0'">
                <router-link to="/heading1/sub1-4">
                  <span id="sub1_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_5 != '0'">
                <router-link to="/heading1/sub1-5">
                  <span id="sub1_5"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading2 != '0'">
            <a
              id="heading2"
              class="changeLiBackgroundColor"
            ></a>
            <ul class="ul_submenu">
              <li v-if="this.sub2_1 != '0'">
                <router-link to="/heading2/sub2-1">
                  <span id="sub2_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_2 != '0'">
                <router-link to="/heading2/sub2-2">
                  <span id="sub2_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_3 != '0'">
                <router-link to="/heading2/sub2-3">
                  <span id="sub2_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_4 != '0'">
                <router-link to="/heading2/sub2-4">
                  <span id="sub2_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_5 != '0'">
                <router-link to="/heading1/sub2-5">
                  <span id="sub2_5"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer dropdown" v-if="this.heading3 != '0'">
            <a
              id="heading3"
              class="changeLiBackgroundColor"
            ></a>
            <ul class="ul_submenu">
              <li v-if="this.sub3_1 != '0'">
                <router-link to="/heading3/sub3-1">
                  <span id="sub3_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_2 != '0'">
                <router-link to="/heading3/sub3-2">
                  <span id="sub3_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_3 != '0'">
                <router-link to="/heading3/sub3-3">
                  <span id="sub3_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_4 != '0'">
                <router-link to="/heading2/sub3-4">
                  <span id="sub3_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_5 != '0'">
                <router-link to="/heading1/sub3-5">
                  <span id="sub3_5"></span>
                </router-link>
              </li>
            </ul>
          </li>

         

          <li class="changeBackgroundPointer dropdown">
            <a
              class="changeLiBackgroundColor"
              >02 - ARK notes
            </a>
            <ul class="ul_submenu">
              <li>
                <router-link to="/ark-notes/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
              <li>
                <router-link to="/ark-notes/elpo">
                  0_1 - ELPO
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              class="changeLiBackgroundColor"
            >
              03 - ELE (subcontractor Elements)
            </a>
            <ul class="ul_submenu">
              <li>
                <router-link to="/ele/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer">
            <a
              class="changeLiBackgroundColor"
            >
              04 - KPH prefabricated bathrooms
            </a>
            <ul class="ul_submenu">
              <li>
                <router-link to="/kph/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
            >
              05 - REI notes
            </a>
            <ul>
              <li>
                <router-link to="/rei/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
              >06 - SAH notes
            </a>
            <ul>
              <li>
                <router-link to="/sah/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
            >
              07 - POR Porras (Stairs)
            </a>
            <ul>
              <li>
                <router-link to="/por/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
            >
              08 - VSS Väestönsuoja (Bomb Shelter)
            </a>
            <ul>
              <li>
                <router-link to="/vss/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
              >09 - V- elements
            </a>
            <ul>
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
                  0_1 General notes Cassette casting
                </router-link>
              </li>
              <li>
                <router-link to="/v-element/general-notes/table">
                  0_2 General notes Table casting
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

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
            >
              10 - L- elements
            </a>

            <ul>
              <li>
                <router-link to="/l-element/standard-operating-procedure">
                  Standard operating procedure
                </router-link>
              </li>
              <li>
                <router-link to="/l-element/general-notes">
                  0_0 - General notes
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

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
              >11 - O- elements
            </a>
            <ul>
              <li>
                <router-link to="/o-element/standard-operating-procedure">
                  Standard operating procedure
                </router-link>
              </li>
              <li>
                <router-link to="/o-element/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
            >
              12 - HKU/HY/HA- elements
            </a>
            <ul>
              <li>
                <router-link to="/hku-hy-ha/general-notes">
                  0_0 - General notes
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer ">
            <a
              class="changeLiBackgroundColor"
              >14 - Drawings
            </a>
            <ul>
              <li>
                <router-link to="/drawings/revision">
                  Revision
                </router-link>
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
      heading1: "1",
      sub1_1: "1",
      sub1_2: "1",
      sub1_3: "1",
      sub1_4: "1",
      sub1_5: "1",

      heading2: "1",
      sub2_1: "1",
      sub2_2: "1",
      sub2_3: "1",
      sub2_4: "1",
      sub2_5: "1",
           
      heading3: "1",
      sub3_1: "1",
      sub3_2: "1",
      sub3_3: "1",
      sub3_4: "1",
      sub3_5: "1",
    };
  },
  mounted() {
    
$('li a').click(function(e) {
  e.preventDefault();
  $(this).closest("li").find("[class^='ul_submenu']").slideToggle();
});


    let json = require("../../side-bar-structure-names.json");

    this.heading1 = json.heading1;
    this.sub1_1 = json.sub1_1;
    this.sub1_2 = json.sub1_2;
    this.sub1_3 = json.sub1_3;
    this.sub1_4 = json.sub1_4;
    this.sub1_5 = json.sub1_5;
    
    document.getElementById("heading1").innerHTML = this.heading1;
    document.getElementById("sub1_1").innerHTML = this.sub1_1;
    document.getElementById("sub1_2").innerHTML = this.sub1_2;
    document.getElementById("sub1_3").innerHTML = this.sub1_3;
    document.getElementById("sub1_4").innerHTML = this.sub1_4;
    document.getElementById("sub1_5").innerHTML = this.sub1_5;

    this.heading2 = json.heading2;
    this.sub2_1 = json.sub2_1;
    this.sub2_2 = json.sub2_2;
    this.sub2_3 = json.sub2_3;
    this.sub2_4 = json.sub2_4;
    this.sub2_5 = json.sub2_5;

    document.getElementById("heading2").innerHTML = this.heading2;
    document.getElementById("sub2_1").innerHTML = this.sub2_1;
    document.getElementById("sub2_2").innerHTML = this.sub2_2;
    document.getElementById("sub2_3").innerHTML = this.sub2_3;
    document.getElementById("sub2_4").innerHTML = this.sub2_4;
    document.getElementById("sub2_5").innerHTML = this.sub2_5;

    this.heading3 = json.heading3;
    this.sub3_1 = json.sub3_1;
    this.sub3_2 = json.sub3_2;
    this.sub3_3 = json.sub3_3;
    this.sub3_4 = json.sub3_4;
    this.sub3_5 = json.sub3_5;

    document.getElementById("heading3").innerHTML = this.heading3;
    document.getElementById("sub3_1").innerHTML = this.sub3_1;
    document.getElementById("sub3_2").innerHTML = this.sub3_2;
    document.getElementById("sub3_3").innerHTML = this.sub3_3;
    document.getElementById("sub3_4").innerHTML = this.sub3_4;
    document.getElementById("sub3_5").innerHTML = this.sub3_5;

  },
  methods: {},
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
.ul_submenu{
  display : none;

}


</style>
