<template>
  <header class="header">
    <div class="header__container container">
      <PageNavigation />
    </div>
  </header>
  <router-view />
</template>

<script>
import PageNavigation from "./components/PageNavigation.vue";
export default {
  components: { PageNavigation },
};
</script>

<style lang="scss">
@import "../node_modules/normalize.css";
@import "./scss/global.scss";
</style>
