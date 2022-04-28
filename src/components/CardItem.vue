<template>
  <article class="card">
    <span class="card__label" v-if="item.price.old_price">Скидка</span>
    <div class="card__preview">
      <img :src="item.image.url" :alt="item.name" />
    </div>
    <div class="card__info">
      <div class="card__code">{{ item.code }}</div>
      <div class="card__name">{{ item.name }}</div>
      <div class="card__price">
        <div
          class="card__old-price"
          :class="item.price.old_price ? 'mr' : null"
        >
          {{ getTruncNumber(item.price.old_price) }}
        </div>
        <div class="card__current-price">
          {{ getTruncNumber(item.price.current_price) }}
        </div>
      </div>
      <div class="card__actions">
        <AddCart
          class="card__btn card__btn--cart"
          @click="addToCartHandler(item)"
          :isActive="isAddedToCart"
        />
        <AddFavorited
          class="card__btn card__btn--favorite"
          :isFavorited="item.favorited"
          @click="addToFavoritedHandler(item)"
        />
      </div>
    </div>
  </article>
</template>

<script>
import AddFavorited from "./CardItemsBtns/AddFavorited.vue";
import AddCart from "./CardItemsBtns/AddCart.vue";
import { mapActions } from "vuex";
export default {
  name: "CardItem",
  components: { AddFavorited, AddCart },
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isAddedToCart: false,
    };
  },
  methods: {
    ...mapActions({
      addToFavorited: "items/addToFavorited",
      addToCart: "items/addToCart",
      toggleFavoritedItem: "items/toggleFavoritedItem",
    }),
    getTruncNumber(num) {
      if (num) {
        return Math.trunc(num);
      }
      return null;
    },
    addToFavoritedHandler(item) {
      this.isFavorited = !this.isFavorited;
      this.addToFavorited(item);
      this.toggleFavoritedItem(item.id);
    },
    addToCartHandler(item) {
      this.isAddedToCart = !this.isAddedToCart;
      this.addToCart(item);
      setTimeout(() => {
        this.isAddedToCart = !this.isAddedToCart;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.mr {
  margin-right: 0.5em;
}
.card {
  position: relative;
  background-color: #fff;
  border: 1px solid var(--stroke-color);
  // .card__label

  &__label {
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    left: 0;
    background-color: var(--attention-color);
    color: #fff;
    font-size: 0.875rem;
    padding: 0.25em 1em;
  }

  // .card__preview

  &__preview {
    position: relative;
    padding-bottom: 75%;

    @media (max-width: 30em) {
      padding-bottom: 50%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .card__info

  &__info {
    padding: 0.8rem;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-rows: 1fr;
  }

  // .card__code

  &__code {
    grid-column: -1 / 1;
    font-size: 0.6rem;
    color: var(--gray-text-color);
    font-weight: 300;
  }

  // .card__name

  &__name {
    grid-column: -1 / 1;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // .card__price

  &__price {
    display: flex;
    align-items: center;
  }

  // .card__old-price

  &__old-price {
    color: var(--gray-text-color);
    font-weight: 300;
    text-decoration: line-through;
  }

  // .card__current-price

  &__current-price {
  }

  // .card__actions

  &__actions {
    display: flex;
    align-items: center;
  }

  // .card__btn

  &__btn {
    cursor: pointer;
    // .card__btn--cart

    &--cart {
      margin-right: 1.6rem;
    }

    // .card__btn--favorite

    &--favorite {
    }
  }
}
</style>
