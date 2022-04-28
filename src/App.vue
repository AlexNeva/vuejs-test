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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
button {
  background-color: transparent;
  border: none;
}
#app {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
.container {
  margin: 0 auto;
  max-width: 93rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
