import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    todo,
  },
});

export default store;
