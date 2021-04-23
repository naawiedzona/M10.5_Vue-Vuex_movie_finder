import Vue from "vue";
import Vuex from "vuex";
//import movies from "../modules/movies";
import films from "../assets/Films.js";

Vue.use(Vuex);

export default new Vuex.Store({
  //  STATE
  state: {
    movies: films(),
    filters: {
      search: "",
      available: true,
    },
  },
  //  MUTATIONS
  mutations: {
    SetSearch(state, value) {
      state.filters.search = value;
      console.log(value);
    },
    SetAvailable(state) {
      state.filters.available = !state.filters.available;
      console.log(state.filters.available);
    },
  },
  actions: {},
  //modules: { movies },
  getters: {
    moviesAvailable: (state) => {
      // filtrar peliculas available = true
      return state.movies.filter(
        (movie) => movie.available === state.filters.available
      );
    },
    moviesLetter: (state) => {
      if (state.filters.search.length > 2) {
        return state.movies.filter((movie) =>
          movie.title.includes(state.filters.search)
        );
      }
    },
  },
});
