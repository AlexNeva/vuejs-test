<template>
  <div class="cards">
    <CardItem v-for="(card, idx) in 20" :key="idx" />
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
export default {
  name: "CardList",
  components: { CardItem },
};
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2.5rem 2.8rem;
}
</style>
