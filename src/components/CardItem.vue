<template>
  <article class="card">
    <span class="card__label">Скидка</span>
    <div class="card__preview">
      <img
        src="data:image/png;base64,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"
        alt="goods img"
      />
    </div>
    <div class="card__info">
      <div class="card__code">L422WH</div>
      <div class="card__name">Ручка дверная</div>
      <div class="card__price">
        <div class="card__old-price">400₽</div>
        <div class="card__current-price">355₽</div>
      </div>
      <div class="card__actions">
        <button type="button" class="card__btn card__btn--cart">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.66412 1.80229C3.50428 1.80194 3.3502 1.82003 3.20378 1.85443C3.00307 1.41204 2.73794 1.01515 2.4364 0.713604C1.92459 0.201799 1.1174 0 0 0V1.8C0.682603 1.8 1.07541 1.8982 1.1636 1.9864C1.50378 2.32657 1.8 3.01776 1.8 3.6L1.80905 3.72728L2.69093 9.90046C1.21532 9.97702 0.0721779 11.1229 0.00110572 12.5554L0 13.5C0.0871391 14.9795 1.22648 16.1177 2.64892 16.1985L2.85323 16.1989C3.22356 17.2481 4.22398 18 5.4 18C6.5756 18 7.57571 17.2487 7.94636 16.2H10.0536C10.4243 17.2487 11.4244 18 12.6 18C14.0912 18 15.3 16.7912 15.3 15.3C15.3 13.8088 14.0912 12.6 12.6 12.6C11.4244 12.6 10.4243 13.3513 10.0536 14.4H7.94636C7.57571 13.3513 6.5756 12.6 5.4 12.6C4.2244 12.6 3.22429 13.3513 2.85364 14.4H2.7C2.24101 14.3725 1.82928 13.9612 1.79838 13.4461L1.8 12.6C1.82427 12.1332 2.23318 11.7243 2.7446 11.6989L4.52132 11.6993L4.5342 11.7H13.6052L13.738 11.6578C14.4204 11.4413 14.9667 10.9275 15.2253 10.2623L15.3201 10.0746L15.6282 9.46429C15.9469 8.83253 16.2656 8.19968 16.5762 7.58142C17.3369 6.06697 17.8153 5.1045 17.9213 4.86815C18.4654 3.65441 17.3632 2.72022 16.2366 2.70032L3.66412 1.80229ZM13.2924 9.89997H4.60154C4.54375 9.88391 4.49972 9.83495 4.4911 9.77399L3.60919 3.60063L16.104 4.4954C15.8854 4.94126 15.4879 5.73762 14.9676 6.77345L14.9546 6.79941C14.6576 7.39065 14.3393 8.02262 14.0211 8.65354L13.7134 9.26309L13.5968 9.49393L13.5529 9.59597C13.5058 9.72695 13.4125 9.83459 13.2924 9.89997ZM12.6 16.1999C13.097 16.1999 13.5 15.797 13.5 15.2999C13.5 14.8029 13.097 14.3999 12.6 14.3999C12.1029 14.3999 11.7 14.8029 11.7 15.2999C11.7 15.797 12.1029 16.1999 12.6 16.1999ZM6.3 15.2999C6.3 15.797 5.89706 16.1999 5.4 16.1999C4.90294 16.1999 4.5 15.797 4.5 15.2999C4.5 14.8029 4.90294 14.3999 5.4 14.3999C5.89706 14.3999 6.3 14.8029 6.3 15.2999Z"
              fill="black"
            />
          </svg>
        </button>
        <button type="button" class="card__btn card__btn--favorite">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0979 1.44916e-05C12.795 0 11.9551 0.155217 10.9924 0.626465C10.6359 0.800937 10.3015 1.01105 9.99095 1.25618C9.69235 1.0248 9.37131 0.824326 9.0296 0.655321C8.04816 0.169898 7.16523 0 5.90907 0C2.54477 0 0.0999756 2.78754 0.0999756 6.40789C0.0999756 9.14198 1.62442 11.7831 4.46393 14.3369C5.95438 15.6774 7.85737 17.004 9.22022 17.7097L9.99998 18.1135L10.7797 17.7097C12.1426 17.004 14.0456 15.6774 15.536 14.3369C18.3755 11.7831 19.9 9.14198 19.9 6.40789C19.9 2.82586 17.4321 0.0138225 14.0979 1.44916e-05ZM18.1 6.40793C18.1 8.54995 16.8276 10.7544 14.3324 12.9986C12.972 14.2221 11.2231 15.4449 10 16.0864C8.77695 15.4449 7.02806 14.2221 5.66767 12.9986C3.17246 10.7544 1.90002 8.54995 1.90002 6.40793C1.90002 3.73298 3.5953 1.80004 5.90911 1.80004C6.90787 1.80004 7.52333 1.91847 8.23164 2.2688C8.65002 2.47573 9.01981 2.74897 9.3399 3.09043L10.0021 3.79687L10.6583 3.08483C10.9856 2.72969 11.3608 2.45023 11.7837 2.24322C12.4713 1.90668 13.0483 1.80004 14.0942 1.80004C16.3794 1.80952 18.1 3.7701 18.1 6.40793Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardItem",
};
</script>

<style lang="scss">
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

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .card__info

  &__info {
    padding: 0.8rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.8rem;
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
    margin-right: 0.5em;
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
