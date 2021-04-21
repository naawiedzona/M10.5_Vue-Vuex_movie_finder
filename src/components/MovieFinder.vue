<template>
  <div id="movie-finder">
<input id="movie-title-input" type="text" placeholder="movie's title">
<div id="disponibilidad">
<input type="radio" name="available" value="Available" checked/> Available
<input type="radio" name="available" value="Sold"/> Sold
</div>
  </div>
</template>

<script>


export default {
   name: 'MovieFinder'
 
}
</script>

<style>
#movie-finder{
    margin: 50px;
    
}
#movie-title-input {
    width: 70%;
    height: 40px;
    font-size: 20px;
    font-family: monospace;

}
#disponibilidad{
    margin-top: 40px;
}
</style>