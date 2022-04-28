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
      materials: [{ id: "0", value: "", name: "Все" }],
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
      state.items = items;
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
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get("/database/items.json");
        commit("setItems", response.data);
      } catch (error) {
        alert(error);
      }
    },
    async fetchMaterials({ state, commit }) {
      try {
        const response = await axios.get("/database/materials.json");
        const data = [...state.materials, ...response.data];
        commit("setMaterials", data);
      } catch (error) {
        alert(error);
      }
    },
  },
  namespaced: true,
};
