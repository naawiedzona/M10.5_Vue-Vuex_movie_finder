<template>
  <div id="movie-item">
    <h3 class="movie-title">{{title}}</h3>
    <p class="movie-description">{{description}}</p>
    <small class="small-text" v-if="available">available</small>
    <small class="small-text small-text-not" v-else-if="!available">not available</small>
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
    margin: 10px;
    width:350px;
    background-color: rgba(255, 254, 254, 0.527);
    position: relative;
}
#movie-item:hover{
    opacity: 0.7;
}
.movie-title{
  border: 1px solid rgba(224, 12, 12, 0.541);
    background-color: rgba(7, 7, 7, 0.719);
    padding: 10px;
    height: 65px;
    margin-top: 0;
    
}
.movie-description{
    padding: 15px;
    line-height: 20px;
    text-align: left;
    font-size: 15px;
}

.small-text{
  color: green;
  position: absolute;
  bottom: 1px;
  font-size: 15px;
}
.small-text-not{
  color: rgba(224, 12, 12, 0.678);
  
}

</style>
