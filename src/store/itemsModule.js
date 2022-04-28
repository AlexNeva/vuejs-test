import axios from "axios";

export default {
  state() {
    return {
      items: [],
    };
  },
  getters: {},
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get("../database/items.json");
        commit("setItems", response.data);
      } catch (error) {
        alert(error);
      }
    },
  },
  namespaced: true,
};
