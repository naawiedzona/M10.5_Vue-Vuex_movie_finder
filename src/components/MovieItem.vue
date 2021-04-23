<template>
  <div id="movie-item">
    <h3 class="movie-title">{{title}}</h3>
    <p class="movie-description">{{description}}</p>
    <small class="small-text" v-if="available">available</small>
    <small class="small-text-not" v-else-if="!available">not available</small>
  </div>
</template>

<script>


export default {
  name: 'MovieItem',
  components: {
    
  },
  props:['title' , 'movieId' , 'description' , 'available']
}
</script>

<style>
#movie-item{
    border: 1px solid rgba(224, 12, 12, 0.541);
    padding: 10px;
    margin: 10px;
    width:350px;
    background-color: rgba(255, 254, 254, 0.527);
}
.movie-title{
    background-color: rgba(224, 12, 12, 0.61);
    padding: 10px;
    height: 60px;
    
}
.movie-description{
    padding: 15px;
    line-height: 20px;
    text-align: left;
    font-size: 15px;
}

.small-text{
  color: green;
}
.small-text-not{
  color: red;
}

</style>
