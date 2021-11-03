<template>
  <li class="todo__item item">
    <span class="item__checkbox"><input type="checkbox" /></span>
    <span class="item__text"
      ><base-input :value="title" @base-input="onBaseInput"
    /></span>
    <span class="item__delete">&times</span>
  </li>
</template>

<script>
import BaseInput from "@/ui/base/components/input/BaseInput";
export default {
  name: "TodoItem",
  components: { BaseInput },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onBaseInput(data) {
      console.log("got text in parent component");
      console.log(data);
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  padding: 8px 16px;
  border-bottom: 0.5px solid $border-color;
  background-color: $app-color;
  display: flex;
  flex-wrap: nowrap;

  &__checkbox {
    width: 5%;
  }
  &__text {
    width: 90%;
    color: $primary-font-color;
  }

  &__delete {
    width: 5%;
    color: $primary-accent-color;
  }
}
</style>
