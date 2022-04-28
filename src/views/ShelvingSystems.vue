<template>
  <main>
    <section class="shelving">
      <div class="shelving__container container">
        <h1 class="shelving__title section-title">
          Комплекты стеллажных систем
        </h1>
        <div class="shelving__filters">фильтры</div>
        <CardList :items="items" />
      </div>
    </section>
  </main>
</template>

<script>
import CardList from "@/components/CardList.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "ShelvingSystemsPage",
  components: { CardList },
  methods: {
    ...mapMutations({
      setItems: "items/setItems",
    }),
    ...mapActions({
      fetchItems: "items/fetchItems",
    }),
  },
  mounted() {
    this.fetchItems();
  },
  computed: {
    ...mapState({
      items: (state) => state.items.items,
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
  }

  // .shelving__cards

  &__cards {
  }

  // .shelving__card

  &__card {
  }
}
</style>
