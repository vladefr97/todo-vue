<template>
  <input v-model="value" type="text" class="base-input" @input="onInput" />
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
      console.log("input text");
      this.$emit("base-input", this.value);
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
