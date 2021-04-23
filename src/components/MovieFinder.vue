<template>
  <div id="movie-finder">
    <input id="movie-title-input" type="text" placeholder="movie's title" v-model="searchInput">
    <div id="disponibilidad">
      <input type="radio" :value="true" v-model="availableInput"/> Available
      <input type="radio" :value="false" v-model="availableInput"/> Sold Out
    </div>
  </div>
</template>

<script>
import store from './../store/index';
export default {
   name: 'MovieFinder',
   //  DATA
   data () {
       return {

       }
   },

   //  COMPUTED PROPERTIES
   computed: {
     // v-model search input
     searchInput:{
       get() {
         return store.state.filters.search;
       },
       set(value) {
         store.commit("SetSearch", value);
       }
     },
     //v-model available
      availableInput:{
       get() {
         return store.state.filters.available;
       },
       set(value) {
         store.commit("SetAvailable", value);
       }
     }
   }
  }
</script>

<style>
#movie-finder{
    margin: 50px;
}

#movie-title-input {
    width: 50%;
    height: 45px;
    font-size: 20px;
    font-family: monospace;
}

#disponibilidad{
    margin-top: 40px;
    color: white;
}
</style>