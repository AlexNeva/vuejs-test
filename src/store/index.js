import { createStore } from "vuex";
import itemsModule from "./itemsModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    items: itemsModule,
  },
});
