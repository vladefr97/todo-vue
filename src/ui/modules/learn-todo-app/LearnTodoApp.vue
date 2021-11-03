<template>
  <div class="learn-todo-app">
    <add-todo-form />
    <todo-list />
  </div>
</template>

<script>
import AddTodoForm from "@/ui/modules/learn-todo-app/components/add-todo-form/AddTodoForm";
import TodoList from "@/ui/modules/learn-todo-app/components/todo-list/TodoList";
export default {
  name: "LearnTodoApp",
  components: { TodoList, AddTodoForm },
};
</script>

<style scoped lang="scss">
.learn-todo-app {
  max-width: 500px;
  margin: 0 auto;
}
</style>
