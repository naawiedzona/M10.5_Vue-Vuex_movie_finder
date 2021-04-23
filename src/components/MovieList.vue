<template>
  <div id="movie-list">
<MovieItem
v-for="(movie, index) in moviesLetter"
:key="index"
:title="movie.title"
:movieId="movie.id"
:description="movie.description"
:available="movie.available"
></MovieItem>
  </div>
</template>

<script>
import store from './../store/index';
import MovieItem from './MovieItem';
//import { mapState } from 'vuex';

export default {
    name: 'MovieList',
    components:{
        MovieItem
    },
  computed: {
   // ...mapState('movies', ['movies'])
    movies () {
      return store.state.movies;
    },
    moviesAvailable () {
      return store.getters.moviesAvailable;
    },
    moviesLetter () {
      return store.getters.moviesLetter;
    }
  } 
}
</script>

<style>
#movie-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}
</style>
