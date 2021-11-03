<template>
  <li class="todo__item item">
    <span class="item__checkbox"><input type="checkbox" /></span>
    <span class="item__text"><base-input v-model="text" /></span>
    <span class="item__delete">&times</span>
  </li>
</template>

<script>
import BaseInput from "@/ui/base/components/input/BaseInput";
export default {
  name: "TodoItem",
  components: { BaseInput },
  props: {
    text: {
      required: true,
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
li {
  padding: 0;
}
.item {
  padding: 8px 16px;
  border-bottom: 0.5px solid $border-color;
  background-color: $app-color;
  display: flex;
  flex-wrap: nowrap;
  //justify-content: space-between;
  //align-items: stretch;

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
