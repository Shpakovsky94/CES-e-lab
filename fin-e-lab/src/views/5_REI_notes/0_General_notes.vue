<template>
<div>
<div>
    <p>
        In REIKA (Holes) task provided information for all elements holes, from HVAC and MEP designers.
    </p>
</div>
<div class="basic">
    <h4>Notes:</h4>
   <ol>
       <li>
           REIKA (Holes) should be modeled by components. Components should be use in same way as for wall casting direction.
       </li>
       <li>
           For inner walls elements (see next V), for top recess should be used (xpar_LEIKKAUS_YR.)
           //TODO: link to the component
           <br>
           <img src="./asserts/1.jpg" alt="1" height="70%" width="70%">
           <br>
           For bottom holes (xpar_LEIKKAUS_AR).
                      //TODO: link to the component

           <br>
           NB! For more detail about component see (1_2_Modeling_Component) chapter.
                      //TODO: link to the component

           <br>
           <img src="./asserts/2.jpg" alt="2" height="20%" width="20%">
       </li>
       <li>
            NB! For elevator roofs could be provided ventilation opening.
       </li>
       <li>
           RADON is kind of gas which is going from the ground. For extraction could be provided pipes from the ground, which will need holes in foundation, and basement floor structural elements.
           NB! See foundation pipe task to check do we need to provide additional holes in our elements.
       </li>
       <li>
           HANAKULMARASIA diameter 15/18 on LVI (HVAC) drawings
       </li>
   </ol>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>