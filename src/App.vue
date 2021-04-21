<template>
  <div id="app">
    <h1 id="app-title">Movie finder</h1>
    <MovieFinder></MovieFinder>
   <MovieList>
   </MovieList>
  </div>
</template>

<script>
import MovieList from './components/MovieList';
import MovieFinder from './components/MovieFinder'

export default {
  name: 'App',
   components: {
    MovieList,
    MovieFinder
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#app-title{
  background-color: rgb(214, 143, 115);
  padding: 25px;
  width: 70%;
  margin: 0 auto;
}
</style>
