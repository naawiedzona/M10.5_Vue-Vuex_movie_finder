<template>
  <div id="movie-list">
<MovieItem
v-for="(movie, index) in movies"
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
import { mapState } from 'vuex';

export default {
    name: 'MovieList',
    components:{
        MovieItem
    },
  computed: {
    ...mapState('movies', ['movies'])
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
