 import films from "../assets/Films.js";
export default {
  namespaced: true,
  state: {
    movies: films(),
    filters:{
      search:"",
      available:true
    }
  },
  mutations: {
    SetSearch(state, value){
      state.filters.search = value;

    },
    SetAvailable(state) {
      state.filters.available = !state.filters.available;
    }
  }, 
  actions: {},
  modules: {},
  getters: {},
};
 