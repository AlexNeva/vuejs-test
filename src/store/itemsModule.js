import axios from "axios";

export default {
  state() {
    return {
      items: [],
      selectedSort: "",
      selectedMaterial: "",
      sortOptions: [
        { value: "", name: "По умолчанию" },
        { value: "up", name: "Цена по возрастанию" },
        { value: "down", name: "Цена по убыванию" },
      ],
      materials: [],
      favoritedItems: JSON.parse(localStorage.getItem("favorited")) || [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  getters: {
    sortedItems(state) {
      return [...state.items].sort((item1, item2) => {
        switch (state.selectedSort) {
          case "up":
            return item1.price.current_price - item2.price.current_price;
          case "down":
            return item2.price.current_price - item1.price.current_price;
          default:
            return 0;
        }
      });
    },
    sortedAndFilteredItems(state, getters) {
      return getters.sortedItems.filter((item) => {
        if (state.selectedMaterial !== "") {
          const material = state.materials.find(
            (material) => material.name === state.selectedMaterial
          );
          return material.id == item.material;
        }
        return getters.sortedItems;
      });
    },
  },
  mutations: {
    setItems(state, items) {
      // state.items = items.map((item) => ({ ...item, favorited: false }));
      state.items = items.map((item) => {
        const favIdArr = state.favoritedItems.map((item) => item.id);

        if (favIdArr.includes(item.id)) {
          return { ...item, favorited: true };
        }
        return { ...item, favorited: false };
      });
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSelectedMaterial(state, selectedMaterial) {
      state.selectedMaterial = selectedMaterial;
    },
    setMaterials(state, materials) {
      state.materials = materials;
    },
    setFavoritedItems(state, item) {
      if (!item.favorited && !state.favoritedItems.includes(item)) {
        state.favoritedItems.push(item);
      } else {
        state.favoritedItems = state.favoritedItems.filter(
          (it) => it.id !== item.id
        );
      }
      localStorage.setItem("favorited", JSON.stringify(state.favoritedItems));
    },
    setFavoritedItem(state, id) {
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, favorited: !item.favorited };
        }
        return item;
      });
    },
    setCart(state, item) {
      state.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get("/vuejs-test/database/items.json");
        commit("setItems", response.data);
      } catch (error) {
        alert(error);
      }
    },
    async fetchMaterials({ commit }) {
      try {
        const response = await axios.get("/vuejs-test/database/materials.json");
        commit("setMaterials", response.data);
      } catch (error) {
        alert(error);
      }
    },
    addToFavorited({ commit }, item) {
      commit("setFavoritedItems", item);
    },
    addToCart({ commit }, item) {
      commit("setCart", item);
    },
    toggleFavoritedItem({ commit }, id) {
      commit("setFavoritedItem", id);
    },
  },
  namespaced: true,
};
