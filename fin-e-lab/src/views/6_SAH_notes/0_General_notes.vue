<template>
  <div>
    <h3>ELECTRICITY</h3>
    <ol>
      <li>
        Task from E – designer is pdf and dwg plans(sometimes only pdf) Located
        in …\SÄH path in the project folder.
      </li>
      <li>
        Electricity task is grouped by room types. Every room has its own
        electrical devices amount. Room types are described in the ARK folder
        task.
      </li>
      <li>
        There are 5 types of the rooms:
        <ol type="a">
          <li><span class="finish-text">KEITTIÖ </span> – Kitchen;</li>
          <li><span class="finish-text">KÄYTÄVÄT </span> – Corridor;</li>
          <li><span class="finish-text">KYLPYHUONE </span> – Bathroom;</li>
          <li><span class="finish-text">ASUINTILAT </span> – Living room;</li>
          <li>
            <span class="finish-text">SÄHKÖPISTEIDEN ULKONA </span> – Outer
            electricity;
          </li>
        </ol>
      </li>
    </ol>

    <table>
      <tbody>
        <tr>
          <td colspan="2" class="center">Room</td>
          <td colspan="5" class="center">Device</td>
          <td rowspan="3" class="center">Component</td>
        </tr>
        <tr>
          <td colspan="2" class="center">Name</td>
          <td>acronym</td>
          <td colspan="2" class="center">name</td>
          <td class="center">symbol</td>
          <td class="center">notes</td>
        </tr>
        <tr>
          <td class="center">Fin</td>
          <td class="center">ENG</td>
          <td></td>
          <td class="center">FIN</td>
          <td class="center">ENG</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="7" class="center">KEITTIÖ</td>
          <td rowspan="7" class="center">Kitchen</td>
          <td>APK</td>
          <td>astianpesukoneen</td>
          <td>dishwasher</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td class="center">I</td>
          <td>xpar_F</td>
        </tr>
        <tr>
          <td>MK <br />(MU)</td>
          <td>mikroaaltouunille</td>
          <td>microwave oven</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_V</td>
        </tr>
        <tr>
          <td>
            JK/PK <br />
            (JK, JKP)
          </td>
          <td>jääkaappi</td>
          <td>Fridge</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_C</td>
        </tr>
        <tr>
          <td>L2/U <br />(L4/U)</td>
          <td>Liesi(kaasuliesi)</td>
          <td>Stove</td>
          <td class="center">
            <img src="./asserts/2.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_O</td>
        </tr>
        <tr>
          <td>LT</td>
          <td>liesituuletin</td>
          <td>Kitchen hoods</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_C</td>
        </tr>
        <tr>
          <td>KP</td>
          <td>työpöytätason yläpuolella olevat pistorasiat</td>
          <td>sockets above the desk top</td>
          <td class="center">
            <img src="./asserts/13.jpg" alt="1" height="35 px" width="50 px" />
          </td>
          <td></td>
          <td>xpar_D</td>
        </tr>
        <tr>
          <td>PV</td>
          <td></td>
          <td></td>
          <td class="center">
            <img src="./asserts/3.jpg" alt="1" height="60 px" width="80 px" />
          </td>
          <td></td>
          <td>xpar_E</td>
        </tr>
        <tr class="center">
          <td colspan="8" height="30 pixels"></td>
        </tr>
        <tr>
          <td rowspan="5" class="center">KÄYTÄVÄT</td>
          <td rowspan="5" class="center">Corridor</td>
          <td></td>
          <td>PISTORASIA</td>
          <td>Socket for corridor</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td class="center">III</td>
          <td>xpar_T</td>
        </tr>
        <tr>
          <td></td>
          <td>PAINIKE / kytkin</td>
          <td>Switch</td>
          <td class="center">
            <img src="./asserts/4.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td class="center">III</td>
          <td>xpar_H</td>
        </tr>
        <tr>
          <td></td>
          <td>SP-LAUKAISU</td>
          <td>Emergency </td>
          <td class="center">
            <img src="./asserts/5.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>IV-HÄTÄSEIS</td>
          <td>Emergency</td>
          <td class="center">
            <img src="./asserts/5.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Door lock</td>
          <td class="center">
            <img src="./asserts/6.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td class="center">IV</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" height="30 pixels"></td>
        </tr>

		<tr>
          <td rowspan="4" class="center">KYLPYHUONE </td>
          <td rowspan="4" class="center">Bathroom</td>
          <td></td>
          <td>PEILIVALO</td>
          <td>Mirror light</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_G</td>
        </tr>
        <tr>
          <td></td>
          <td>PISTORASIA</td>
          <td>Socket</td>
          <td class="center">
            <img src="./asserts/13.jpg" alt="1" height="35 px" width="50 px" />
          </td>
          <td></td>
          <td>xpar_T / xpar_Y</td>
        </tr>
        <tr>
          <td>PPK</td>
          <td>PESUKONE   KUIV.</td>
          <td>Washing and drying machine </td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_U</td>
        </tr>
        <tr>
          <td>VPK</td>
          <td>valaisinpeilikaappi</td>
          <td>Lamp next to the mirror </td>
          <td class="center">
            <img src="./asserts/12.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_E</td>
        </tr>
        <tr>
          <td colspan="8" height="30 pixels"></td>
        </tr>
		
		<tr>
          <td rowspan="5" class="center">ASUINTILAT </td>
          <td rowspan="5" class="center">Living room</td>
          <td></td>
          <td></td>
          <td>Other electronic device </td>
          <td class="center">
            <img src="./asserts/13.jpg" alt="1" height="35 px" width="50 px" />
          </td>
          <td></td>
          <td>xpar_A</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>TV socket</td>
          <td class="center">
            <img src="./asserts/7.jpg" alt="1" height="40 px" width="40 px" />
          </td>
          <td></td>
          <td>xpar_BB</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Internet box </td>
          <td class="center">
            <img src="./asserts/8.jpg" alt="1" height="40 px" width="40 px" />
          </td>
          <td class="center">II</td>
          <td>xpar_BB</td>
        </tr>
        <tr>
          <td>PV</td>
          <td></td>
          <td>Lightning socket</td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_PV</td>
        </tr>
		<tr>
          <td></td>
          <td>huoneistojen lattialämmitystermostaatit</td>
          <td>apartment thermostat for floor heating </td>
          <td class="center">
            <img src="./asserts/9.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td>xpar_S</td>
        </tr>
        <tr>
          <td colspan="8" height="30 pixels"></td>
        </tr>

			<tr>
          <td rowspan="6" class="center">SÄHKÖPISTEIDEN ULKONA   </td>
          <td rowspan="6" class="center">Outer electricity</td>
          <td></td>
          <td>LÄMMITTIMEN (PARVEKE)</td>
          <td>HEATER (BALCONY) </td>
          <td class="center">
            <img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>PISTORASIA (PARVEKE)</td>
          <td>SOCKET (BALCONY)</td>
          <td class="center">
            <img src="./asserts/13.jpg" alt="1" height="35 px" width="50 px" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>VALAISIN (PARVEKE)</td>
          <td>LIGHTING (BALCONY)</td>
          <td class="center">
            <img src="./asserts/10.jpg" alt="1" height="40 px" width="40 px" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>VALAISIN</td>
          <td>LAMP</td>
          <td>
          </td>
          <td></td>
          <td></td>
        </tr>
		<tr>
          <td></td>
          <td>OVIKELLO</td>
          <td>Doorbell </td>
          <td>
          </td>
          <td></td>
          <td></td>
        </tr>
		<tr>
          <td></td>
          <td>OVIPUHELIN</td>
          <td>Door phone</td>
          <td>
          </td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </table>
	<p>
		<h4>Notes:</h4>
    <ol type="I">
		<li>
			Socket for dishwasher cannot be placed behind the device, should be placed at least 100 mm from the dishwasher side.
		</li>
		<li>
			Cable for Internet socket should be Universal = JM25, for Antenna JM20.
		</li>
		<li>
			Distance between sockets and door opening edge <span style="color:red">min 300 mm </span>.
		</li>
		<li>
			For door lock should be provided cables in door lintel.
		</li>
	</ol>
	<ul>
			<li>
			Sockets <span style="color:red">inside </span> of the elements   
			<img src="./asserts/1.jpg" alt="1" height="40 px" width="60 px" />

		</li>
		<li>
			Sockets outside of the elements  			
			<img src="./asserts/11.jpg" alt="1" height="40 px" width="60 px" />
  
		</li>
	</ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
}
</style>
