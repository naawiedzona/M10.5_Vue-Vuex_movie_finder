<template>
  <div id="app">
    <div id="header">
    <h1 id="app-title">Movie finder</h1>
    <img src="../src/assets/movies-app.jpg" alt="">
    </div>
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
  text-align: center;
  background-color: rgba(0, 0, 0, 0.932);
  width: 100vw;
  position:relative;
}
#header{
  display: flex;
  justify-content: center;
  align-content: center;
}
#app-title{
  background-color:rgba(19, 19, 19, 0.699);
  color: rgba(224, 12, 12, 0.678);
  width: 60%;
  line-height: 120px;
  font-size: 60px;
  position: absolute;
  margin-top: 200px;
}
img{
  width: 70%;
  max-height: 500px;
  vertical-align: top;
}
</style>
