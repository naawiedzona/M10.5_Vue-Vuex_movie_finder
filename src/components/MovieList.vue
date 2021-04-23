<template>
  <div id="movie-list">
<MovieItem
v-for="(movie, index) in films"
:key="index"
:title="movie.title"
:movieId="movie.id"
:description="movie.description"
:available="movie.available"
></MovieItem>
  </div>
</template>

<script>
import MovieItem from './MovieItem';
import Vuex from 'vuex';

export default {
    name: 'MovieList',
    components:{
        MovieItem
    },
  computed: {
    ...Vuex.mapGetters({films:"FilteredMovies"})
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
