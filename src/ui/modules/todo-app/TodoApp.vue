<template>
  <div class="todo">
    Приложение TODO:
    <todo-add-item />
    <todo-list />
  </div>
</template>

<script>
import TodoList from "@/ui/modules/todo-app/components/todo-list/TodoList";
import TodoAddItem from "@/ui/modules/todo-app/components/todo-add-item/TodoAddItem";
export default {
  name: "TodoApp",
  components: { TodoAddItem, TodoList },
};
</script>

<style scoped lang="scss">
.todo {
  max-width: 600px;
  background-color: $app-color;
  margin: 0 auto;
  border: 2px solid $border-color;
  padding: 0;
}
</style>
