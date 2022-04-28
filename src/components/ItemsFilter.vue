<template>
  <label class="select-control">
    <span class="select-control__title">Материал:</span>
    <select
      :value="modelValue"
      @change="changeOptions"
      class="select-control__select"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value !== '' ? option.name : ''"
      >
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "ItemsFilter",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(evt) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/selects.scss";
</style>
