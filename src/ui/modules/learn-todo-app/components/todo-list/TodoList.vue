<template>
  <ul class="todo__list">
    <todo-item
      v-for="todo of todoItems"
      :id="todo.id"
      :key="todo.id"
      :title="todo.title"
    />
  </ul>
</template>

<script>
import TodoItem from "@/ui/modules/learn-todo-app/components/todo-list/components/TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {
      todoItems: [
        { id: 1, title: "Один" },
        { id: 2, title: "Два" },
        { id: 3, title: "Три" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
