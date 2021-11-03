<template>
  <div class="add-todo-form">
    <input v-model="value" type="text" />
    <button @click="onButtonClick">Добавить</button>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "AddTodoForm",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onButtonClick() {
      console.log("кнопка нажата");
      console.log(this.value);
    },
  },
};
</script>

<style scoped></style>
