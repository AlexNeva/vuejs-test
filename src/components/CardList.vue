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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2.5rem 2.8rem;

  @media (max-width: 36em) {
    grid-template-columns: 1fr;
  }
}
</style>
