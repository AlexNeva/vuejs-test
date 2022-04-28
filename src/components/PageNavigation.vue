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
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      &::after {
        content: "/";
        color: var(--gray-text-color);
        padding: 0 0.9rem;
      }
    }
  }

  &__link {
    color: var(--gray-text-color);
    text-decoration: none;

    &.router-link-active {
      color: var(--main-text-color);
    }

    @media (max-width: 36em) {
      font-size: 0.75rem;
    }
  }
}
</style>
