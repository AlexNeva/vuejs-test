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
:root {
  --gray-text-color: #828282;
  --main-text-color: #000000;
  --stroke-color: #eeeeee;
  --attention-color: #eb5757;
}
#app {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: var(--main-text-color);
}

.section-title {
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 1em;
}

.header {
  padding: 2rem 0;
}
.container {
  margin: 0 auto;
  max-width: 97rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
