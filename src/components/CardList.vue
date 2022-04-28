<template>
  <div class="cards">
    <CardItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
export default {
  name: "CardList",
  components: { CardItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  padding: 2.5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2.8rem;

  @media (max-width: 75em) {
    gap: 1.5rem 1.5rem;
  }

  @media (max-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 30em) {
    grid-template-columns: 1fr;
  }
}
</style>
