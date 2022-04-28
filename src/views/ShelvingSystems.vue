<template>
  <main>
    <section class="shelving">
      <div class="shelving__container container">
        <h1 class="shelving__title section-title">
          Комплекты стеллажных систем
        </h1>
        <div class="shelving__filters">
          <ItemsSorter
            class="shelving__filter"
            :options="sortOptions"
            :modelValue="selectedSort"
            @update:modelValue="setSelectedSort"
          />
          <ItemsFilter
            class="shelving__filter"
            :options="materials"
            :modelValue="selectedMaterial"
            @update:modelValue="setSelectedMaterial"
          />
        </div>
        <CardList :items="sortedAndFilteredItems" />
      </div>
    </section>
  </main>
</template>

<script>
import CardList from "@/components/CardList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ItemsSorter from "@/components/ItemsSorter.vue";
import ItemsFilter from "@/components/ItemsFilter.vue";
export default {
  name: "ShelvingSystemsPage",
  components: { CardList, ItemsSorter, ItemsFilter },
  methods: {
    ...mapMutations({
      setItems: "items/setItems",
      setSelectedSort: "items/setSelectedSort",
      setSelectedMaterial: "items/setSelectedMaterial",
      setMaterials: "items/setMaterials",
    }),
    ...mapActions({
      fetchItems: "items/fetchItems",
      fetchMaterials: "items/fetchMaterials",
    }),
  },
  mounted() {
    this.fetchItems();
    this.fetchMaterials();
  },
  computed: {
    ...mapState({
      items: (state) => state.items.items,
      sortOptions: (state) => state.items.sortOptions,
      materials: (state) => state.items.materials,
      selectedSort: (state) => state.items.selectedSort,
      selectedMaterial: (state) => state.items.selectedMaterial,
    }),
    ...mapGetters({
      sortedItems: "items/sortedItems",
      sortedAndFilteredItems: "items/sortedAndFilteredItems",
    }),
  },
};
</script>

<style lang="scss">
.shelving {
  // .shelving__container

  &__container {
  }

  // .shelving__filters

  &__filters {
    display: flex;
    flex-wrap: wrap;
    margin: -0.75rem;
  }

  &__filter {
    margin: 0.75rem;
  }
}
</style>
