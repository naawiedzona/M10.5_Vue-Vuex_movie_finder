<template>
  <div id="movie-item">
    <h3 class="movie-title">{{title}}</h3>
    <p class="movie-description">{{description}}</p>
    <small class="small-text" v-if="available">disponible</small>
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
    border: 1px solid lightgreen;
    padding: 10px;
    margin: 10px;
    width:350px;
}
.movie-title{
    background-color: rgba(47, 46, 46, 0.171);
    padding: 10px;
    height: 60px;
    
}
.movie-description{
    padding: 15px;
    line-height: 20px;
    text-align: left;
    font-size: 15px;
}

</style>
