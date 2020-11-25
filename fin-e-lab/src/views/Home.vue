<template>
  <body>
    <nav class="navbar navbar-expand navbar-dark bg-dark header">
      <a class="navbar-brand" href="/">CES-FIN</a>
    </nav>

    <div class="grid-container">
      <div class="left">
        <ul>
          <li class="changeBackgroundPointer " v-if="this.heading1 != '0'">
            <a id="heading1" class="changeLiBackgroundColor"></a>
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
              <li v-if="this.sub1_6 != '0'">
                <router-link to="/heading1/sub1-6">
                  <span id="sub1_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_7 != '0'">
                <router-link to="/heading1/sub1-7">
                  <span id="sub1_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_8 != '0'">
                <router-link to="/heading1/sub1-8">
                  <span id="sub1_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_9 != '0'">
                <router-link to="/heading1/sub1-9">
                  <span id="sub1_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub1_10 != '0'">
                <router-link to="/heading1/sub1-10">
                  <span id="sub1_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading2 != '0'">
            <a id="heading2" class="changeLiBackgroundColor"></a>
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
                <router-link to="/heading2/sub2-5">
                  <span id="sub2_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_6 != '0'">
                <router-link to="/heading2/sub2-6">
                  <span id="sub2_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_7 != '0'">
                <router-link to="/heading2/sub2-7">
                  <span id="sub2_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_8 != '0'">
                <router-link to="/heading2/sub2-8">
                  <span id="sub2_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_9 != '0'">
                <router-link to="/heading2/sub2-9">
                  <span id="sub2_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub2_10 != '0'">
                <router-link to="/heading2/sub2-10">
                  <span id="sub2_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading3 != '0'">
            <a id="heading3" class="changeLiBackgroundColor"></a>
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
                <router-link to="/heading3/sub3-4">
                  <span id="sub3_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_5 != '0'">
                <router-link to="/heading3/sub3-5">
                  <span id="sub3_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_6 != '0'">
                <router-link to="/heading3/sub3-6">
                  <span id="sub3_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_7 != '0'">
                <router-link to="/heading3/sub3-7">
                  <span id="sub3_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_8 != '0'">
                <router-link to="/heading3/sub3-8">
                  <span id="sub3_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_9 != '0'">
                <router-link to="/heading3/sub3-9">
                  <span id="sub3_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub3_10 != '0'">
                <router-link to="/heading3/sub3-10">
                  <span id="sub3_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading4 != '0'">
            <a id="heading4" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub4_1 != '0'">
                <router-link to="/heading4/sub4-1">
                  <span id="sub4_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_2 != '0'">
                <router-link to="/heading4/sub4-2">
                  <span id="sub4_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_3 != '0'">
                <router-link to="/heading4/sub4-3">
                  <span id="sub4_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_4 != '0'">
                <router-link to="/heading4/sub4-4">
                  <span id="sub4_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_5 != '0'">
                <router-link to="/heading4/sub4-5">
                  <span id="sub4_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_6 != '0'">
                <router-link to="/heading4/sub4-6">
                  <span id="sub4_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_7 != '0'">
                <router-link to="/heading4/sub4-7">
                  <span id="sub4_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_8 != '0'">
                <router-link to="/heading4/sub4-8">
                  <span id="sub4_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_9 != '0'">
                <router-link to="/heading4/sub4-9">
                  <span id="sub4_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub4_10 != '0'">
                <router-link to="/heading4/sub4-10">
                  <span id="sub4_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading5 != '0'">
            <a id="heading5" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub5_1 != '0'">
                <router-link to="/heading5/sub5-1">
                  <span id="sub5_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_2 != '0'">
                <router-link to="/heading5/sub5-2">
                  <span id="sub5_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_3 != '0'">
                <router-link to="/heading5/sub5-3">
                  <span id="sub5_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_4 != '0'">
                <router-link to="/heading5/sub5-4">
                  <span id="sub5_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_5 != '0'">
                <router-link to="/heading5/sub5-5">
                  <span id="sub5_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_6 != '0'">
                <router-link to="/heading5/sub5-6">
                  <span id="sub5_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_7 != '0'">
                <router-link to="/heading5/sub5-7">
                  <span id="sub5_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_8 != '0'">
                <router-link to="/heading5/sub5-8">
                  <span id="sub5_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_9 != '0'">
                <router-link to="/heading5/sub5-9">
                  <span id="sub5_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub5_10 != '0'">
                <router-link to="/heading5/sub5-10">
                  <span id="sub5_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading6 != '0'">
            <a id="heading6" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub6_1 != '0'">
                <router-link to="/heading6/sub6-1">
                  <span id="sub6_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_2 != '0'">
                <router-link to="/heading6/sub6-2">
                  <span id="sub6_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_3 != '0'">
                <router-link to="/heading6/sub6-3">
                  <span id="sub6_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_4 != '0'">
                <router-link to="/heading6/sub6-4">
                  <span id="sub6_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_5 != '0'">
                <router-link to="/heading6/sub6-5">
                  <span id="sub6_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_6 != '0'">
                <router-link to="/heading6/sub6-6">
                  <span id="sub6_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_7 != '0'">
                <router-link to="/heading6/sub6-7">
                  <span id="sub6_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_8 != '0'">
                <router-link to="/heading6/sub6-8">
                  <span id="sub6_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_9 != '0'">
                <router-link to="/heading6/sub6-9">
                  <span id="sub6_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub6_10 != '0'">
                <router-link to="/heading6/sub6-10">
                  <span id="sub6_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading7 != '0'">
            <a id="heading7" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub7_1 != '0'">
                <router-link to="/heading7/sub7-1">
                  <span id="sub7_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_2 != '0'">
                <router-link to="/heading7/sub7-2">
                  <span id="sub7_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_3 != '0'">
                <router-link to="/heading7/sub7-3">
                  <span id="sub7_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_4 != '0'">
                <router-link to="/heading7/sub7-4">
                  <span id="sub7_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_5 != '0'">
                <router-link to="/heading7/sub7-5">
                  <span id="sub7_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_6 != '0'">
                <router-link to="/heading7/sub7-6">
                  <span id="sub7_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_7 != '0'">
                <router-link to="/heading7/sub7-7">
                  <span id="sub7_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_8 != '0'">
                <router-link to="/heading7/sub7-8">
                  <span id="sub7_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_9 != '0'">
                <router-link to="/heading7/sub7-9">
                  <span id="sub7_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub7_10 != '0'">
                <router-link to="/heading7/sub7-10">
                  <span id="sub7_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading8 != '0'">
            <a id="heading8" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub8_1 != '0'">
                <router-link to="/heading8/sub8-1">
                  <span id="sub8_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_2 != '0'">
                <router-link to="/heading8/sub8-2">
                  <span id="sub8_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_3 != '0'">
                <router-link to="/heading8/sub8-3">
                  <span id="sub8_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_4 != '0'">
                <router-link to="/heading8/sub8-4">
                  <span id="sub8_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_5 != '0'">
                <router-link to="/heading8/sub8-5">
                  <span id="sub8_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_6 != '0'">
                <router-link to="/heading8/sub8-6">
                  <span id="sub8_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_7 != '0'">
                <router-link to="/heading8/sub8-7">
                  <span id="sub8_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_8 != '0'">
                <router-link to="/heading8/sub8-8">
                  <span id="sub8_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_9 != '0'">
                <router-link to="/heading8/sub8-9">
                  <span id="sub8_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub8_10 != '0'">
                <router-link to="/heading8/sub8-10">
                  <span id="sub8_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading9 != '0'">
            <a id="heading9" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub9_1 != '0'">
                <router-link to="/heading9/sub9-1">
                  <span id="sub9_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_2 != '0'">
                <router-link to="/heading9/sub9-2">
                  <span id="sub9_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_3 != '0'">
                <router-link to="/heading9/sub9-3">
                  <span id="sub9_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_4 != '0'">
                <router-link to="/heading9/sub9-4">
                  <span id="sub9_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_5 != '0'">
                <router-link to="/heading9/sub9-5">
                  <span id="sub9_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_6 != '0'">
                <router-link to="/heading9/sub9-6">
                  <span id="sub9_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_7 != '0'">
                <router-link to="/heading9/sub9-7">
                  <span id="sub9_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_8 != '0'">
                <router-link to="/heading9/sub9-8">
                  <span id="sub9_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_9 != '0'">
                <router-link to="/heading9/sub9-9">
                  <span id="sub9_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub9_10 != '0'">
                <router-link to="/heading9/sub9-10">
                  <span id="sub9_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading10 != '0'">
            <a id="heading10" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub10_1 != '0'">
                <router-link to="/heading10/sub10-1">
                  <span id="sub10_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_2 != '0'">
                <router-link to="/heading10/sub10-2">
                  <span id="sub10_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_3 != '0'">
                <router-link to="/heading10/sub10-3">
                  <span id="sub10_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_4 != '0'">
                <router-link to="/heading10/sub10-4">
                  <span id="sub10_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_5 != '0'">
                <router-link to="/heading10/sub10-5">
                  <span id="sub10_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_6 != '0'">
                <router-link to="/heading10/sub10-6">
                  <span id="sub10_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_7 != '0'">
                <router-link to="/heading10/sub10-7">
                  <span id="sub10_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_8 != '0'">
                <router-link to="/heading10/sub10-8">
                  <span id="sub10_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_9 != '0'">
                <router-link to="/heading10/sub10-9">
                  <span id="sub10_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub10_10 != '0'">
                <router-link to="/heading10/sub10-10">
                  <span id="sub10_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading11 != '0'">
            <a id="heading11" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub11_1 != '0'">
                <router-link to="/heading11/sub11-1">
                  <span id="sub11_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_2 != '0'">
                <router-link to="/heading11/sub11-2">
                  <span id="sub11_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_3 != '0'">
                <router-link to="/heading11/sub11-3">
                  <span id="sub11_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_4 != '0'">
                <router-link to="/heading11/sub11-4">
                  <span id="sub11_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_5 != '0'">
                <router-link to="/heading11/sub11-5">
                  <span id="sub11_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_6 != '0'">
                <router-link to="/heading11/sub11-6">
                  <span id="sub11_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_7 != '0'">
                <router-link to="/heading11/sub11-7">
                  <span id="sub11_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_8 != '0'">
                <router-link to="/heading11/sub11-8">
                  <span id="sub11_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_9 != '0'">
                <router-link to="/heading11/sub11-9">
                  <span id="sub11_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub11_10 != '0'">
                <router-link to="/heading11/sub11-10">
                  <span id="sub11_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading12 != '0'">
            <a id="heading12" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub12_1 != '0'">
                <router-link to="/heading12/sub12-1">
                  <span id="sub12_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_2 != '0'">
                <router-link to="/heading12/sub12-2">
                  <span id="sub12_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_3 != '0'">
                <router-link to="/heading12/sub12-3">
                  <span id="sub12_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_4 != '0'">
                <router-link to="/heading12/sub12-4">
                  <span id="sub12_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_5 != '0'">
                <router-link to="/heading12/sub12-5">
                  <span id="sub12_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_6 != '0'">
                <router-link to="/heading12/sub12-6">
                  <span id="sub12_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_7 != '0'">
                <router-link to="/heading12/sub12-7">
                  <span id="sub12_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_8 != '0'">
                <router-link to="/heading12/sub12-8">
                  <span id="sub12_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_9 != '0'">
                <router-link to="/heading12/sub12-9">
                  <span id="sub12_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub12_10 != '0'">
                <router-link to="/heading12/sub12-10">
                  <span id="sub12_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading13 != '0'">
            <a id="heading13" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub13_1 != '0'">
                <router-link to="/heading13/sub13-1">
                  <span id="sub13_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_2 != '0'">
                <router-link to="/heading13/sub13-2">
                  <span id="sub13_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_3 != '0'">
                <router-link to="/heading13/sub13-3">
                  <span id="sub13_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_4 != '0'">
                <router-link to="/heading13/sub13-4">
                  <span id="sub13_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_5 != '0'">
                <router-link to="/heading13/sub13-5">
                  <span id="sub13_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_6 != '0'">
                <router-link to="/heading13/sub13-6">
                  <span id="sub13_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_7 != '0'">
                <router-link to="/heading13/sub13-7">
                  <span id="sub13_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_8 != '0'">
                <router-link to="/heading13/sub13-8">
                  <span id="sub13_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_9 != '0'">
                <router-link to="/heading13/sub13-9">
                  <span id="sub13_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub13_10 != '0'">
                <router-link to="/heading13/sub13-10">
                  <span id="sub13_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading14 != '0'">
            <a id="heading14" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub14_1 != '0'">
                <router-link to="/heading14/sub14-1">
                  <span id="sub14_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_2 != '0'">
                <router-link to="/heading14/sub14-2">
                  <span id="sub14_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_3 != '0'">
                <router-link to="/heading14/sub14-3">
                  <span id="sub14_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_4 != '0'">
                <router-link to="/heading14/sub14-4">
                  <span id="sub14_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_5 != '0'">
                <router-link to="/heading14/sub14-5">
                  <span id="sub14_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_6 != '0'">
                <router-link to="/heading14/sub14-6">
                  <span id="sub14_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_7 != '0'">
                <router-link to="/heading14/sub14-7">
                  <span id="sub14_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_8 != '0'">
                <router-link to="/heading14/sub14-8">
                  <span id="sub14_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_9 != '0'">
                <router-link to="/heading14/sub14-9">
                  <span id="sub14_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub14_10 != '0'">
                <router-link to="/heading14/sub14-10">
                  <span id="sub14_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading15 != '0'">
            <a id="heading15" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub15_1 != '0'">
                <router-link to="/heading15/sub15-1">
                  <span id="sub15_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_2 != '0'">
                <router-link to="/heading15/sub15-2">
                  <span id="sub15_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_3 != '0'">
                <router-link to="/heading15/sub15-3">
                  <span id="sub15_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_4 != '0'">
                <router-link to="/heading15/sub15-4">
                  <span id="sub15_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_5 != '0'">
                <router-link to="/heading15/sub15-5">
                  <span id="sub15_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_6 != '0'">
                <router-link to="/heading15/sub15-6">
                  <span id="sub15_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_7 != '0'">
                <router-link to="/heading15/sub15-7">
                  <span id="sub15_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_8 != '0'">
                <router-link to="/heading15/sub15-8">
                  <span id="sub15_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_9 != '0'">
                <router-link to="/heading15/sub15-9">
                  <span id="sub15_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub15_10 != '0'">
                <router-link to="/heading15/sub15-10">
                  <span id="sub15_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading16 != '0'">
            <a id="heading16" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub16_1 != '0'">
                <router-link to="/heading16/sub16-1">
                  <span id="sub16_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_2 != '0'">
                <router-link to="/heading16/sub16-2">
                  <span id="sub16_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_3 != '0'">
                <router-link to="/heading16/sub16-3">
                  <span id="sub16_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_4 != '0'">
                <router-link to="/heading16/sub16-4">
                  <span id="sub16_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_5 != '0'">
                <router-link to="/heading16/sub16-5">
                  <span id="sub16_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_6 != '0'">
                <router-link to="/heading16/sub16-6">
                  <span id="sub16_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_7 != '0'">
                <router-link to="/heading16/sub16-7">
                  <span id="sub16_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_8 != '0'">
                <router-link to="/heading16/sub16-8">
                  <span id="sub16_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_9 != '0'">
                <router-link to="/heading16/sub16-9">
                  <span id="sub16_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub16_10 != '0'">
                <router-link to="/heading16/sub16-10">
                  <span id="sub16_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading17 != '0'">
            <a id="heading17" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub17_1 != '0'">
                <router-link to="/heading17/sub17-1">
                  <span id="sub17_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_2 != '0'">
                <router-link to="/heading17/sub17-2">
                  <span id="sub17_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_3 != '0'">
                <router-link to="/heading17/sub17-3">
                  <span id="sub17_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_4 != '0'">
                <router-link to="/heading17/sub17-4">
                  <span id="sub17_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_5 != '0'">
                <router-link to="/heading17/sub17-5">
                  <span id="sub17_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_6 != '0'">
                <router-link to="/heading17/sub17-6">
                  <span id="sub17_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_7 != '0'">
                <router-link to="/heading17/sub17-7">
                  <span id="sub17_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_8 != '0'">
                <router-link to="/heading17/sub17-8">
                  <span id="sub17_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_9 != '0'">
                <router-link to="/heading17/sub17-9">
                  <span id="sub17_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub17_10 != '0'">
                <router-link to="/heading17/sub17-10">
                  <span id="sub17_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading18 != '0'">
            <a id="heading18" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub18_1 != '0'">
                <router-link to="/heading18/sub18-1">
                  <span id="sub18_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_2 != '0'">
                <router-link to="/heading18/sub18-2">
                  <span id="sub18_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_3 != '0'">
                <router-link to="/heading18/sub18-3">
                  <span id="sub18_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_4 != '0'">
                <router-link to="/heading18/sub18-4">
                  <span id="sub18_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_5 != '0'">
                <router-link to="/heading18/sub18-5">
                  <span id="sub18_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_6 != '0'">
                <router-link to="/heading18/sub18-6">
                  <span id="sub18_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_7 != '0'">
                <router-link to="/heading18/sub18-7">
                  <span id="sub18_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_8 != '0'">
                <router-link to="/heading18/sub18-8">
                  <span id="sub18_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_9 != '0'">
                <router-link to="/heading18/sub18-9">
                  <span id="sub18_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub18_10 != '0'">
                <router-link to="/heading18/sub18-10">
                  <span id="sub18_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading19 != '0'">
            <a id="heading19" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub19_1 != '0'">
                <router-link to="/heading19/sub19-1">
                  <span id="sub19_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_2 != '0'">
                <router-link to="/heading19/sub19-2">
                  <span id="sub19_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_3 != '0'">
                <router-link to="/heading19/sub19-3">
                  <span id="sub19_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_4 != '0'">
                <router-link to="/heading19/sub19-4">
                  <span id="sub19_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_5 != '0'">
                <router-link to="/heading19/sub19-5">
                  <span id="sub19_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_6 != '0'">
                <router-link to="/heading19/sub19-6">
                  <span id="sub19_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_7 != '0'">
                <router-link to="/heading19/sub19-7">
                  <span id="sub19_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_8 != '0'">
                <router-link to="/heading19/sub19-8">
                  <span id="sub19_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_9 != '0'">
                <router-link to="/heading19/sub19-9">
                  <span id="sub19_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub19_10 != '0'">
                <router-link to="/heading19/sub19-10">
                  <span id="sub19_10"></span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="changeBackgroundPointer" v-if="this.heading20 != '0'">
            <a id="heading20" class="changeLiBackgroundColor"></a>
            <ul class="ul_submenu">
              <li v-if="this.sub20_1 != '0'">
                <router-link to="/heading20/sub20-1">
                  <span id="sub20_1"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_2 != '0'">
                <router-link to="/heading20/sub20-2">
                  <span id="sub20_2"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_3 != '0'">
                <router-link to="/heading20/sub20-3">
                  <span id="sub20_3"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_4 != '0'">
                <router-link to="/heading20/sub20-4">
                  <span id="sub20_4"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_5 != '0'">
                <router-link to="/heading20/sub20-5">
                  <span id="sub20_5"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_6 != '0'">
                <router-link to="/heading20/sub20-6">
                  <span id="sub20_6"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_7 != '0'">
                <router-link to="/heading20/sub20-7">
                  <span id="sub20_7"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_8 != '0'">
                <router-link to="/heading20/sub20-8">
                  <span id="sub20_8"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_9 != '0'">
                <router-link to="/heading20/sub20-9">
                  <span id="sub20_9"></span>
                </router-link>
              </li>
              <li v-if="this.sub20_10 != '0'">
                <router-link to="/heading20/sub20-10">
                  <span id="sub20_10"></span>
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
      sub1_6: "1",
      sub1_7: "1",
      sub1_8: "1",
      sub1_9: "1",
      sub1_10: "1",

      heading2: "1",
      sub2_1: "1",
      sub2_2: "1",
      sub2_3: "1",
      sub2_4: "1",
      sub2_5: "1",
      sub2_6: "1",
      sub2_7: "1",
      sub2_8: "1",
      sub2_9: "1",
      sub2_10: "1",

      heading3: "1",
      sub3_1: "1",
      sub3_2: "1",
      sub3_3: "1",
      sub3_4: "1",
      sub3_5: "1",
      sub3_6: "1",
      sub3_7: "1",
      sub3_8: "1",
      sub3_9: "1",
      sub3_10: "1",

      heading4: "1",
      sub4_1: "1",
      sub4_2: "1",
      sub4_3: "1",
      sub4_4: "1",
      sub4_5: "1",
      sub4_6: "1",
      sub4_7: "1",
      sub4_8: "1",
      sub4_9: "1",
      sub4_10: "1",

      heading5: "1",
      sub5_1: "1",
      sub5_2: "1",
      sub5_3: "1",
      sub5_4: "1",
      sub5_5: "1",
      sub5_6: "1",
      sub5_7: "1",
      sub5_8: "1",
      sub5_9: "1",
      sub5_10: "1",

      heading6: "1",
      sub6_1: "1",
      sub6_2: "1",
      sub6_3: "1",
      sub6_4: "1",
      sub6_5: "1",
      sub6_6: "1",
      sub6_7: "1",
      sub6_8: "1",
      sub6_9: "1",
      sub6_10: "1",

      heading7: "1",
      sub7_1: "1",
      sub7_2: "1",
      sub7_3: "1",
      sub7_4: "1",
      sub7_5: "1",
      sub7_6: "1",
      sub7_7: "1",
      sub7_8: "1",
      sub7_9: "1",
      sub7_10: "1",

      heading8: "1",
      sub8_1: "1",
      sub8_2: "1",
      sub8_3: "1",
      sub8_4: "1",
      sub8_5: "1",
      sub8_6: "1",
      sub8_7: "1",
      sub8_8: "1",
      sub8_9: "1",
      sub8_10: "1",

      heading9: "1",
      sub9_1: "1",
      sub9_2: "1",
      sub9_3: "1",
      sub9_4: "1",
      sub9_5: "1",
      sub9_6: "1",
      sub9_7: "1",
      sub9_8: "1",
      sub9_9: "1",
      sub9_10: "1",

      heading10: "1",
      sub10_1: "1",
      sub10_2: "1",
      sub10_3: "1",
      sub10_4: "1",
      sub10_5: "1",
      sub10_6: "1",
      sub10_7: "1",
      sub10_8: "1",
      sub10_9: "1",
      sub10_10: "1",

      heading11: "1",
      sub11_1: "1",
      sub11_2: "1",
      sub11_3: "1",
      sub11_4: "1",
      sub11_5: "1",
      sub11_6: "1",
      sub11_7: "1",
      sub11_8: "1",
      sub11_9: "1",
      sub11_10: "1",

      heading12: "1",
      sub12_1: "1",
      sub12_2: "1",
      sub12_3: "1",
      sub12_4: "1",
      sub12_5: "1",
      sub12_6: "1",
      sub12_7: "1",
      sub12_8: "1",
      sub12_9: "1",
      sub12_10: "1",

      heading13: "1",
      sub13_1: "1",
      sub13_2: "1",
      sub13_3: "1",
      sub13_4: "1",
      sub13_5: "1",
      sub13_6: "1",
      sub13_7: "1",
      sub13_8: "1",
      sub13_9: "1",
      sub13_10: "1",

      heading14: "1",
      sub14_1: "1",
      sub14_2: "1",
      sub14_3: "1",
      sub14_4: "1",
      sub14_5: "1",
      sub14_6: "1",
      sub14_7: "1",
      sub14_8: "1",
      sub14_9: "1",
      sub14_10: "1",

      heading15: "1",
      sub15_1: "1",
      sub15_2: "1",
      sub15_3: "1",
      sub15_4: "1",
      sub15_5: "1",
      sub15_6: "1",
      sub15_7: "1",
      sub15_8: "1",
      sub15_9: "1",
      sub15_10: "1",

      heading16: "1",
      sub16_1: "1",
      sub16_2: "1",
      sub16_3: "1",
      sub16_4: "1",
      sub16_5: "1",
      sub16_6: "1",
      sub16_7: "1",
      sub16_8: "1",
      sub16_9: "1",
      sub16_10: "1",

      heading17: "1",
      sub17_1: "1",
      sub17_2: "1",
      sub17_3: "1",
      sub17_4: "1",
      sub17_5: "1",
      sub17_6: "1",
      sub17_7: "1",
      sub17_8: "1",
      sub17_9: "1",
      sub17_10: "1",

      heading18: "1",
      sub18_1: "1",
      sub18_2: "1",
      sub18_3: "1",
      sub18_4: "1",
      sub18_5: "1",
      sub18_6: "1",
      sub18_7: "1",
      sub18_8: "1",
      sub18_9: "1",
      sub18_10: "1",

      heading19: "1",
      sub19_1: "1",
      sub19_2: "1",
      sub19_3: "1",
      sub19_4: "1",
      sub19_5: "1",
      sub19_6: "1",
      sub19_7: "1",
      sub19_8: "1",
      sub19_9: "1",
      sub19_10: "1",

      heading20: "1",
      sub20_1: "1",
      sub20_2: "1",
      sub20_3: "1",
      sub20_4: "1",
      sub20_5: "1",
      sub20_6: "1",
      sub20_7: "1",
      sub20_8: "1",
      sub20_9: "1",
      sub20_10: "1",
    };
  },
  mounted() {
    $("li a").click(function(e) {
      e.preventDefault();
      $(this)
        .closest("li")
        .find("[class^='ul_submenu']")
        .slideToggle();
    });

    let json = require("../../side-bar-structure-names.json");

    this.heading1 = json.heading1;
    this.sub1_1 = json.sub1_1;
    this.sub1_2 = json.sub1_2;
    this.sub1_3 = json.sub1_3;
    this.sub1_4 = json.sub1_4;
    this.sub1_5 = json.sub1_5;
    this.sub1_6 = json.sub1_6;
    this.sub1_7 = json.sub1_7;
    this.sub1_8 = json.sub1_8;
    this.sub1_9 = json.sub1_9;
    this.sub1_10 = json.sub1_10;

    document.getElementById("heading1").innerHTML = this.heading1;
    document.getElementById("sub1_1").innerHTML = this.sub1_1;
    document.getElementById("sub1_2").innerHTML = this.sub1_2;
    document.getElementById("sub1_3").innerHTML = this.sub1_3;
    document.getElementById("sub1_4").innerHTML = this.sub1_4;
    document.getElementById("sub1_5").innerHTML = this.sub1_5;
    document.getElementById("sub1_6").innerHTML = this.sub1_6;
    document.getElementById("sub1_7").innerHTML = this.sub1_7;
    document.getElementById("sub1_8").innerHTML = this.sub1_8;
    document.getElementById("sub1_9").innerHTML = this.sub1_9;
    document.getElementById("sub1_10").innerHTML = this.sub1_10;

    this.heading2 = json.heading2;
    this.sub2_1 = json.sub2_1;
    this.sub2_2 = json.sub2_2;
    this.sub2_3 = json.sub2_3;
    this.sub2_4 = json.sub2_4;
    this.sub2_5 = json.sub2_5;
    this.sub2_6 = json.sub2_6;
    this.sub2_7 = json.sub2_7;
    this.sub2_8 = json.sub2_8;
    this.sub2_9 = json.sub2_9;
    this.sub2_10 = json.sub2_10;

    document.getElementById("heading2").innerHTML = this.heading2;
    document.getElementById("sub2_1").innerHTML = this.sub2_1;
    document.getElementById("sub2_2").innerHTML = this.sub2_2;
    document.getElementById("sub2_3").innerHTML = this.sub2_3;
    document.getElementById("sub2_4").innerHTML = this.sub2_4;
    document.getElementById("sub2_5").innerHTML = this.sub2_5;
    document.getElementById("sub2_6").innerHTML = this.sub2_6;
    document.getElementById("sub2_7").innerHTML = this.sub2_7;
    document.getElementById("sub2_8").innerHTML = this.sub2_8;
    document.getElementById("sub2_9").innerHTML = this.sub2_9;
    document.getElementById("sub2_10").innerHTML = this.sub2_10;

    this.heading3 = json.heading3;
    this.sub3_1 = json.sub3_1;
    this.sub3_2 = json.sub3_2;
    this.sub3_3 = json.sub3_3;
    this.sub3_4 = json.sub3_4;
    this.sub3_5 = json.sub3_5;
    this.sub3_6 = json.sub3_6;
    this.sub3_7 = json.sub3_7;
    this.sub3_8 = json.sub3_8;
    this.sub3_9 = json.sub3_9;
    this.sub3_10 = json.sub3_10;

    document.getElementById("heading3").innerHTML = this.heading3;
    document.getElementById("sub3_1").innerHTML = this.sub3_1;
    document.getElementById("sub3_2").innerHTML = this.sub3_2;
    document.getElementById("sub3_3").innerHTML = this.sub3_3;
    document.getElementById("sub3_4").innerHTML = this.sub3_4;
    document.getElementById("sub3_5").innerHTML = this.sub3_5;
    document.getElementById("sub3_6").innerHTML = this.sub3_6;
    document.getElementById("sub3_7").innerHTML = this.sub3_7;
    document.getElementById("sub3_8").innerHTML = this.sub3_8;
    document.getElementById("sub3_9").innerHTML = this.sub3_9;
    document.getElementById("sub3_10").innerHTML = this.sub3_10;

    this.heading4 = json.heading4;
    this.sub4_1 = json.sub4_1;
    this.sub4_2 = json.sub4_2;
    this.sub4_3 = json.sub4_3;
    this.sub4_4 = json.sub4_4;
    this.sub4_5 = json.sub4_5;
    this.sub4_6 = json.sub4_6;
    this.sub4_7 = json.sub4_7;
    this.sub4_8 = json.sub4_8;
    this.sub4_9 = json.sub4_9;
    this.sub4_10 = json.sub4_10;

    document.getElementById("heading4").innerHTML = this.heading4;
    document.getElementById("sub4_1").innerHTML = this.sub4_1;
    document.getElementById("sub4_2").innerHTML = this.sub4_2;
    document.getElementById("sub4_3").innerHTML = this.sub4_3;
    document.getElementById("sub4_4").innerHTML = this.sub4_4;
    document.getElementById("sub4_5").innerHTML = this.sub4_5;
    document.getElementById("sub4_6").innerHTML = this.sub4_6;
    document.getElementById("sub4_7").innerHTML = this.sub4_7;
    document.getElementById("sub4_8").innerHTML = this.sub4_8;
    document.getElementById("sub4_9").innerHTML = this.sub4_9;
    document.getElementById("sub4_10").innerHTML = this.sub4_10;

    this.heading5 = json.heading5;
    this.sub5_1 = json.sub5_1;
    this.sub5_2 = json.sub5_2;
    this.sub5_3 = json.sub5_3;
    this.sub5_4 = json.sub5_4;
    this.sub5_5 = json.sub5_5;
    this.sub5_6 = json.sub5_6;
    this.sub5_7 = json.sub5_7;
    this.sub5_8 = json.sub5_8;
    this.sub5_9 = json.sub5_9;
    this.sub5_10 = json.sub5_10;

    document.getElementById("heading5").innerHTML = this.heading5;
    document.getElementById("sub5_1").innerHTML = this.sub5_1;
    document.getElementById("sub5_2").innerHTML = this.sub5_2;
    document.getElementById("sub5_3").innerHTML = this.sub5_3;
    document.getElementById("sub5_4").innerHTML = this.sub5_4;
    document.getElementById("sub5_5").innerHTML = this.sub5_5;
    document.getElementById("sub5_6").innerHTML = this.sub5_6;
    document.getElementById("sub5_7").innerHTML = this.sub5_7;
    document.getElementById("sub5_8").innerHTML = this.sub5_8;
    document.getElementById("sub5_9").innerHTML = this.sub5_9;
    document.getElementById("sub5_10").innerHTML = this.sub5_10;

    this.heading6 = json.heading6;
    this.sub6_1 = json.sub6_1;
    this.sub6_2 = json.sub6_2;
    this.sub6_3 = json.sub6_3;
    this.sub6_4 = json.sub6_4;
    this.sub6_5 = json.sub6_5;
    this.sub6_6 = json.sub6_6;
    this.sub6_7 = json.sub6_7;
    this.sub6_8 = json.sub6_8;
    this.sub6_9 = json.sub6_9;
    this.sub6_10 = json.sub6_10;

    document.getElementById("heading6").innerHTML = this.heading6;
    document.getElementById("sub6_1").innerHTML = this.sub6_1;
    document.getElementById("sub6_2").innerHTML = this.sub6_2;
    document.getElementById("sub6_3").innerHTML = this.sub6_3;
    document.getElementById("sub6_4").innerHTML = this.sub6_4;
    document.getElementById("sub6_5").innerHTML = this.sub6_5;
    document.getElementById("sub6_6").innerHTML = this.sub6_6;
    document.getElementById("sub6_7").innerHTML = this.sub6_7;
    document.getElementById("sub6_8").innerHTML = this.sub6_8;
    document.getElementById("sub6_9").innerHTML = this.sub6_9;
    document.getElementById("sub6_10").innerHTML = this.sub6_10;

    this.heading7 = json.heading7;
    this.sub7_1 = json.sub7_1;
    this.sub7_2 = json.sub7_2;
    this.sub7_3 = json.sub7_3;
    this.sub7_4 = json.sub7_4;
    this.sub7_5 = json.sub7_5;
    this.sub7_6 = json.sub7_6;
    this.sub7_7 = json.sub7_7;
    this.sub7_8 = json.sub7_8;
    this.sub7_9 = json.sub7_9;
    this.sub7_10 = json.sub7_10;

    document.getElementById("heading7").innerHTML = this.heading7;
    document.getElementById("sub7_1").innerHTML = this.sub7_1;
    document.getElementById("sub7_2").innerHTML = this.sub7_2;
    document.getElementById("sub7_3").innerHTML = this.sub7_3;
    document.getElementById("sub7_4").innerHTML = this.sub7_4;
    document.getElementById("sub7_5").innerHTML = this.sub7_5;
    document.getElementById("sub7_6").innerHTML = this.sub7_6;
    document.getElementById("sub7_7").innerHTML = this.sub7_7;
    document.getElementById("sub7_8").innerHTML = this.sub7_8;
    document.getElementById("sub7_9").innerHTML = this.sub7_9;
    document.getElementById("sub7_10").innerHTML = this.sub7_10;

    this.heading8 = json.heading8;
    this.sub8_1 = json.sub8_1;
    this.sub8_2 = json.sub8_2;
    this.sub8_3 = json.sub8_3;
    this.sub8_4 = json.sub8_4;
    this.sub8_5 = json.sub8_5;
    this.sub8_6 = json.sub8_6;
    this.sub8_7 = json.sub8_7;
    this.sub8_8 = json.sub8_8;
    this.sub8_9 = json.sub8_9;
    this.sub8_10 = json.sub8_10;

    document.getElementById("heading8").innerHTML = this.heading8;
    document.getElementById("sub8_1").innerHTML = this.sub8_1;
    document.getElementById("sub8_2").innerHTML = this.sub8_2;
    document.getElementById("sub8_3").innerHTML = this.sub8_3;
    document.getElementById("sub8_4").innerHTML = this.sub8_4;
    document.getElementById("sub8_5").innerHTML = this.sub8_5;
    document.getElementById("sub8_6").innerHTML = this.sub8_6;
    document.getElementById("sub8_7").innerHTML = this.sub8_7;
    document.getElementById("sub8_8").innerHTML = this.sub8_8;
    document.getElementById("sub8_9").innerHTML = this.sub8_9;
    document.getElementById("sub8_10").innerHTML = this.sub8_10;

    this.heading9 = json.heading9;
    this.sub9_1 = json.sub9_1;
    this.sub9_2 = json.sub9_2;
    this.sub9_3 = json.sub9_3;
    this.sub9_4 = json.sub9_4;
    this.sub9_5 = json.sub9_5;
    this.sub9_6 = json.sub9_6;
    this.sub9_7 = json.sub9_7;
    this.sub9_8 = json.sub9_8;
    this.sub9_9 = json.sub9_9;
    this.sub9_10 = json.sub9_10;

    document.getElementById("heading9").innerHTML = this.heading9;
    document.getElementById("sub9_1").innerHTML = this.sub9_1;
    document.getElementById("sub9_2").innerHTML = this.sub9_2;
    document.getElementById("sub9_3").innerHTML = this.sub9_3;
    document.getElementById("sub9_4").innerHTML = this.sub9_4;
    document.getElementById("sub9_5").innerHTML = this.sub9_5;
    document.getElementById("sub9_6").innerHTML = this.sub9_6;
    document.getElementById("sub9_7").innerHTML = this.sub9_7;
    document.getElementById("sub9_8").innerHTML = this.sub9_8;
    document.getElementById("sub9_9").innerHTML = this.sub9_9;
    document.getElementById("sub9_10").innerHTML = this.sub9_10;

    this.heading10 = json.heading10;
    this.sub10_1 = json.sub10_1;
    this.sub10_2 = json.sub10_2;
    this.sub10_3 = json.sub10_3;
    this.sub10_4 = json.sub10_4;
    this.sub10_5 = json.sub10_5;
    this.sub10_6 = json.sub10_6;
    this.sub10_7 = json.sub10_7;
    this.sub10_8 = json.sub10_8;
    this.sub10_9 = json.sub10_9;
    this.sub10_10 = json.sub10_10;

    document.getElementById("heading10").innerHTML = this.heading10;
    document.getElementById("sub10_1").innerHTML = this.sub10_1;
    document.getElementById("sub10_2").innerHTML = this.sub10_2;
    document.getElementById("sub10_3").innerHTML = this.sub10_3;
    document.getElementById("sub10_4").innerHTML = this.sub10_4;
    document.getElementById("sub10_5").innerHTML = this.sub10_5;
    document.getElementById("sub10_6").innerHTML = this.sub10_6;
    document.getElementById("sub10_7").innerHTML = this.sub10_7;
    document.getElementById("sub10_8").innerHTML = this.sub10_8;
    document.getElementById("sub10_9").innerHTML = this.sub10_9;
    document.getElementById("sub10_10").innerHTML = this.sub10_10;

    this.heading11 = json.heading11;
    this.sub11_1 = json.sub11_1;
    this.sub11_2 = json.sub11_2;
    this.sub11_3 = json.sub11_3;
    this.sub11_4 = json.sub11_4;
    this.sub11_5 = json.sub11_5;
    this.sub11_6 = json.sub11_6;
    this.sub11_7 = json.sub11_7;
    this.sub11_8 = json.sub11_8;
    this.sub11_9 = json.sub11_9;
    this.sub11_10 = json.sub11_10;

    document.getElementById("heading11").innerHTML = this.heading11;
    document.getElementById("sub11_1").innerHTML = this.sub11_1;
    document.getElementById("sub11_2").innerHTML = this.sub11_2;
    document.getElementById("sub11_3").innerHTML = this.sub11_3;
    document.getElementById("sub11_4").innerHTML = this.sub11_4;
    document.getElementById("sub11_5").innerHTML = this.sub11_5;
    document.getElementById("sub11_6").innerHTML = this.sub11_6;
    document.getElementById("sub11_7").innerHTML = this.sub11_7;
    document.getElementById("sub11_8").innerHTML = this.sub11_8;
    document.getElementById("sub11_9").innerHTML = this.sub11_9;
    document.getElementById("sub11_10").innerHTML = this.sub11_10;

    this.heading12 = json.heading12;
    this.sub12_1 = json.sub12_1;
    this.sub12_2 = json.sub12_2;
    this.sub12_3 = json.sub12_3;
    this.sub12_4 = json.sub12_4;
    this.sub12_5 = json.sub12_5;
    this.sub12_6 = json.sub12_6;
    this.sub12_7 = json.sub12_7;
    this.sub12_8 = json.sub12_8;
    this.sub12_9 = json.sub12_9;
    this.sub12_10 = json.sub12_10;

    document.getElementById("heading12").innerHTML = this.heading12;
    document.getElementById("sub12_1").innerHTML = this.sub12_1;
    document.getElementById("sub12_2").innerHTML = this.sub12_2;
    document.getElementById("sub12_3").innerHTML = this.sub12_3;
    document.getElementById("sub12_4").innerHTML = this.sub12_4;
    document.getElementById("sub12_5").innerHTML = this.sub12_5;
    document.getElementById("sub12_6").innerHTML = this.sub12_6;
    document.getElementById("sub12_7").innerHTML = this.sub12_7;
    document.getElementById("sub12_8").innerHTML = this.sub12_8;
    document.getElementById("sub12_9").innerHTML = this.sub12_9;
    document.getElementById("sub12_10").innerHTML = this.sub12_10;

    this.heading13 = json.heading13;
    this.sub13_1 = json.sub13_1;
    this.sub13_2 = json.sub13_2;
    this.sub13_3 = json.sub13_3;
    this.sub13_4 = json.sub13_4;
    this.sub13_5 = json.sub13_5;
    this.sub13_6 = json.sub13_6;
    this.sub13_7 = json.sub13_7;
    this.sub13_8 = json.sub13_8;
    this.sub13_9 = json.sub13_9;
    this.sub13_10 = json.sub13_10;

    document.getElementById("heading13").innerHTML = this.heading13;
    document.getElementById("sub13_1").innerHTML = this.sub13_1;
    document.getElementById("sub13_2").innerHTML = this.sub13_2;
    document.getElementById("sub13_3").innerHTML = this.sub13_3;
    document.getElementById("sub13_4").innerHTML = this.sub13_4;
    document.getElementById("sub13_5").innerHTML = this.sub13_5;
    document.getElementById("sub13_6").innerHTML = this.sub13_6;
    document.getElementById("sub13_7").innerHTML = this.sub13_7;
    document.getElementById("sub13_8").innerHTML = this.sub13_8;
    document.getElementById("sub13_9").innerHTML = this.sub13_9;
    document.getElementById("sub13_10").innerHTML = this.sub13_10;

    this.heading14 = json.heading14;
    this.sub14_1 = json.sub14_1;
    this.sub14_2 = json.sub14_2;
    this.sub14_3 = json.sub14_3;
    this.sub14_4 = json.sub14_4;
    this.sub14_5 = json.sub14_5;
    this.sub14_6 = json.sub14_6;
    this.sub14_7 = json.sub14_7;
    this.sub14_8 = json.sub14_8;
    this.sub14_9 = json.sub14_9;
    this.sub14_10 = json.sub14_10;

    document.getElementById("heading14").innerHTML = this.heading14;
    document.getElementById("sub14_1").innerHTML = this.sub14_1;
    document.getElementById("sub14_2").innerHTML = this.sub14_2;
    document.getElementById("sub14_3").innerHTML = this.sub14_3;
    document.getElementById("sub14_4").innerHTML = this.sub14_4;
    document.getElementById("sub14_5").innerHTML = this.sub14_5;
    document.getElementById("sub14_6").innerHTML = this.sub14_6;
    document.getElementById("sub14_7").innerHTML = this.sub14_7;
    document.getElementById("sub14_8").innerHTML = this.sub14_8;
    document.getElementById("sub14_9").innerHTML = this.sub14_9;
    document.getElementById("sub14_10").innerHTML = this.sub14_10;

    this.heading15 = json.heading15;
    this.sub15_1 = json.sub15_1;
    this.sub15_2 = json.sub15_2;
    this.sub15_3 = json.sub15_3;
    this.sub15_4 = json.sub15_4;
    this.sub15_5 = json.sub15_5;
    this.sub15_6 = json.sub15_6;
    this.sub15_7 = json.sub15_7;
    this.sub15_8 = json.sub15_8;
    this.sub15_9 = json.sub15_9;
    this.sub15_10 = json.sub15_10;

    document.getElementById("heading15").innerHTML = this.heading15;
    document.getElementById("sub15_1").innerHTML = this.sub15_1;
    document.getElementById("sub15_2").innerHTML = this.sub15_2;
    document.getElementById("sub15_3").innerHTML = this.sub15_3;
    document.getElementById("sub15_4").innerHTML = this.sub15_4;
    document.getElementById("sub15_5").innerHTML = this.sub15_5;
    document.getElementById("sub15_6").innerHTML = this.sub15_6;
    document.getElementById("sub15_7").innerHTML = this.sub15_7;
    document.getElementById("sub15_8").innerHTML = this.sub15_8;
    document.getElementById("sub15_9").innerHTML = this.sub15_9;
    document.getElementById("sub15_10").innerHTML = this.sub15_10;

    this.heading16 = json.heading16;
    this.sub16_1 = json.sub16_1;
    this.sub16_2 = json.sub16_2;
    this.sub16_3 = json.sub16_3;
    this.sub16_4 = json.sub16_4;
    this.sub16_5 = json.sub16_5;
    this.sub16_6 = json.sub16_6;
    this.sub16_7 = json.sub16_7;
    this.sub16_8 = json.sub16_8;
    this.sub16_9 = json.sub16_9;
    this.sub16_10 = json.sub16_10;

    document.getElementById("heading16").innerHTML = this.heading16;
    document.getElementById("sub16_1").innerHTML = this.sub16_1;
    document.getElementById("sub16_2").innerHTML = this.sub16_2;
    document.getElementById("sub16_3").innerHTML = this.sub16_3;
    document.getElementById("sub16_4").innerHTML = this.sub16_4;
    document.getElementById("sub16_5").innerHTML = this.sub16_5;
    document.getElementById("sub16_6").innerHTML = this.sub16_6;
    document.getElementById("sub16_7").innerHTML = this.sub16_7;
    document.getElementById("sub16_8").innerHTML = this.sub16_8;
    document.getElementById("sub16_9").innerHTML = this.sub16_9;
    document.getElementById("sub16_10").innerHTML = this.sub16_10;

    this.heading17 = json.heading17;
    this.sub17_1 = json.sub17_1;
    this.sub17_2 = json.sub17_2;
    this.sub17_3 = json.sub17_3;
    this.sub17_4 = json.sub17_4;
    this.sub17_5 = json.sub17_5;
    this.sub17_6 = json.sub17_6;
    this.sub17_7 = json.sub17_7;
    this.sub17_8 = json.sub17_8;
    this.sub17_9 = json.sub17_9;
    this.sub17_10 = json.sub17_10;

    document.getElementById("heading17").innerHTML = this.heading17;
    document.getElementById("sub17_1").innerHTML = this.sub17_1;
    document.getElementById("sub17_2").innerHTML = this.sub17_2;
    document.getElementById("sub17_3").innerHTML = this.sub17_3;
    document.getElementById("sub17_4").innerHTML = this.sub17_4;
    document.getElementById("sub17_5").innerHTML = this.sub17_5;
    document.getElementById("sub17_6").innerHTML = this.sub17_6;
    document.getElementById("sub17_7").innerHTML = this.sub17_7;
    document.getElementById("sub17_8").innerHTML = this.sub17_8;
    document.getElementById("sub17_9").innerHTML = this.sub17_9;
    document.getElementById("sub17_10").innerHTML = this.sub17_10;

    this.heading18 = json.heading18;
    this.sub18_1 = json.sub18_1;
    this.sub18_2 = json.sub18_2;
    this.sub18_3 = json.sub18_3;
    this.sub18_4 = json.sub18_4;
    this.sub18_5 = json.sub18_5;
    this.sub18_6 = json.sub18_6;
    this.sub18_7 = json.sub18_7;
    this.sub18_8 = json.sub18_8;
    this.sub18_9 = json.sub18_9;
    this.sub18_10 = json.sub18_10;

    document.getElementById("heading18").innerHTML = this.heading18;
    document.getElementById("sub18_1").innerHTML = this.sub18_1;
    document.getElementById("sub18_2").innerHTML = this.sub18_2;
    document.getElementById("sub18_3").innerHTML = this.sub18_3;
    document.getElementById("sub18_4").innerHTML = this.sub18_4;
    document.getElementById("sub18_5").innerHTML = this.sub18_5;
    document.getElementById("sub18_6").innerHTML = this.sub18_6;
    document.getElementById("sub18_7").innerHTML = this.sub18_7;
    document.getElementById("sub18_8").innerHTML = this.sub18_8;
    document.getElementById("sub18_9").innerHTML = this.sub18_9;
    document.getElementById("sub18_10").innerHTML = this.sub18_10;

    this.heading19 = json.heading19;
    this.sub19_1 = json.sub19_1;
    this.sub19_2 = json.sub19_2;
    this.sub19_3 = json.sub19_3;
    this.sub19_4 = json.sub19_4;
    this.sub19_5 = json.sub19_5;
    this.sub19_6 = json.sub19_6;
    this.sub19_7 = json.sub19_7;
    this.sub19_8 = json.sub19_8;
    this.sub19_9 = json.sub19_9;
    this.sub19_10 = json.sub19_10;

    document.getElementById("heading19").innerHTML = this.heading19;
    document.getElementById("sub19_1").innerHTML = this.sub19_1;
    document.getElementById("sub19_2").innerHTML = this.sub19_2;
    document.getElementById("sub19_3").innerHTML = this.sub19_3;
    document.getElementById("sub19_4").innerHTML = this.sub19_4;
    document.getElementById("sub19_5").innerHTML = this.sub19_5;
    document.getElementById("sub19_6").innerHTML = this.sub19_6;
    document.getElementById("sub19_7").innerHTML = this.sub19_7;
    document.getElementById("sub19_8").innerHTML = this.sub19_8;
    document.getElementById("sub19_9").innerHTML = this.sub19_9;
    document.getElementById("sub19_10").innerHTML = this.sub19_10;

    this.heading20 = json.heading20;
    this.sub20_1 = json.sub20_1;
    this.sub20_2 = json.sub20_2;
    this.sub20_3 = json.sub20_3;
    this.sub20_4 = json.sub20_4;
    this.sub20_5 = json.sub20_5;
    this.sub20_6 = json.sub20_6;
    this.sub20_7 = json.sub20_7;
    this.sub20_8 = json.sub20_8;
    this.sub20_9 = json.sub20_9;
    this.sub20_10 = json.sub20_10;

    document.getElementById("heading20").innerHTML = this.heading20;
    document.getElementById("sub20_1").innerHTML = this.sub20_1;
    document.getElementById("sub20_2").innerHTML = this.sub20_2;
    document.getElementById("sub20_3").innerHTML = this.sub20_3;
    document.getElementById("sub20_4").innerHTML = this.sub20_4;
    document.getElementById("sub20_5").innerHTML = this.sub20_5;
    document.getElementById("sub20_6").innerHTML = this.sub20_6;
    document.getElementById("sub20_7").innerHTML = this.sub20_7;
    document.getElementById("sub20_8").innerHTML = this.sub20_8;
    document.getElementById("sub20_9").innerHTML = this.sub20_9;
    document.getElementById("sub20_10").innerHTML = this.sub20_10;
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
.ul_submenu {
  display: none;
}
</style>
