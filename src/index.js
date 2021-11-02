import Vue from "vue";

import store from "./store";
import router from "./router";
import App from "./App.vue";

const VueApp = new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
