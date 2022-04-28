<template>
  <nav class="page-navigation">
    <ul class="page-navigation__list">
      <li class="page-navigation__item">
        <router-link to="/" class="page-navigation__link">
          Главная
        </router-link>
      </li>
      <li class="page-navigation__item">
        <router-link to="/storage-systems" class="page-navigation__link">
          Системы хранения
        </router-link>
      </li>
      <li class="page-navigation__item">
        <router-link to="/shelving-systems" class="page-navigation__link">
          Комплекты стеллажных систем
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PageNavigation",
};
</script>

<style lang="scss">
.page-navigation {
  &__list {
    display: flex;
  }

  &__item {
  }

  &__link {
  }
}
</style>
