<template>
  <body>

   <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="/">FIN-e-lab</a>
    </nav>

    <div class="grid-container">
      
      <div class="left">
        <ul>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href
              >00 - Planning
              <span class="folder-indicator">+</span>
            </a>
            <ul>
              <li>
                <router-link to="/planning/general-notes">
                  00 - General notes
                  <span class="folder-indicator">+</span></router-link
                >
              </li>
            </ul>
          </li>

          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >01 - RAK notes <span class="folder-indicator">+</span>        
            </a>

            <ul>
              <li>
                <router-link to="/rak-notes/general-notes">
                  00 - General notes
                  <span class="folder-indicator">+</span></router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >02 - ARK notes <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >03 - ELE (subcontractor Elements)
              <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >04 - KPH prefabricated bathrooms
              <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >05 - REI notes <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >06 - REI notes <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >07 - SAH notes <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >08 - VSS Väestönsuoja (Bomb Shelter)
              <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >09 - V- elements <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >10 - L- elements <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >11 - O- elements <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >12 - HKU/HY/HA- elements
              <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >13 - Components description
              <span class="folder-indicator">+</span></a
            >
          </li>
          <li>
            <a
              data-ajax="true"
              data-ajax-update="#foldertarget-13946388-14955496"
              href="/Folder/13946388/Open/14955496"
              >14 - Drawings <span class="folder-indicator">+</span></a
            >
          </li>
        </ul>
      </div>

      <div class="middle" style="background-color: #bbb">
        <div>
          <router-view />
        </div>
      </div>

      <div class="footer">
        <p>Footer</p>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}


/* The grid container */
.grid-container {
  display: grid;
  grid-template-areas:
    "left middle middle middle middle middle middle middle"
    "footer footer footer footer footer footer footer footer";
}

.left,
.middle{
  padding: 10px;
}

/* Style the left column */
.left {
  grid-area: left;
}

/* Style the middle column */
.middle {
  grid-area: middle;
}

/* Style the footer */
.footer {
  grid-area: footer;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .grid-container {
    grid-template-areas:
      "left middle middle middle middle middle middle middle"
      "footer footer footer footer footer footer footer footer";
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

ul {
  list-style-type: none;
}
</style>