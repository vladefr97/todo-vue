<template>
  <input type="text" :value="value" class="base-input" @input="onInput" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInput() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style scoped lang="scss">
.base-input {
  width: 100%;
  border: none;
  outline: none;
  color: $primary-font-color;
  font-size: 1.1rem;
}
</style>
