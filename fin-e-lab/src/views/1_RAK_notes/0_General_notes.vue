<template>

<div class="basic">
   <ol>
       <li>
           Reference viewing logic
           <br>
           <img src="./asserts/1.jpg" alt="1" height="30%" width="30%">
       </li>
       <li>
           Floor slabs position according architectural floors should be modeled as in RAK details task.
       </li>
       <li>
           HCS type, direction and position must be according to RAK.
       </li>
       <li>
           All joints should be according to RAK details.
       </li>
       <li>
           All elements should have supports structure below. Exception there beams, or Wall-beams element.
       </li>
       <li>
           Wall-beams element should be calculated and reinforced according to EUROCODE requires.
       </li>
       <li>
           Between deformations joint (different building blocks) should be provided temporary manholes.
           Usually manholes perimeters have vertical seams structure (see next URA), for later site casting.
       </li>
       <li>
           Usually next to the staircases on site expected to be vacuum cleaner holes for cables connections between floors. Usually they are not presented on REIKA (Holes) task, and must be confirmed in INFO document. Common to have T150 holes a line thought all floors next to the staircase;
       </li>
       <li>
           Mostly RAK details are common from project to project. But Modeler should always aware of some unique solutions.
           <br>
           <img src="./asserts/2.jpg" alt="2" height="30%" width="30%">
       </li>
       <li>
           Modeler and Project coordinator should be aware of building blocks division, and assembly order.
           All elements which are needed, for correct elements montage should be at the same delivery.
           E.g. Common situation when HCS slabs are supporting by walls from different delivery or building BLOCK. In that case all walls which are needed should be provided in the same delivery.
       </li>
   </ol>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>