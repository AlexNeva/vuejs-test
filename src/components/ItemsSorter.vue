<template>
  <label class="select-control">
    <span class="select-control__title">Сортировать по:</span>
    <select
      :value="modelValue"
      @change="changeOptions"
      class="select-control__select"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "ItemsSorter",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: "",
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
