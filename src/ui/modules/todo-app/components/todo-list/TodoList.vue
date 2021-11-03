<template>
  <ul class="todo__list">
    <todo-item
      v-for="item of todoItems"
      :id="item.id"
      :key="item.id"
      :text="item.text"
      @delete="onDelete"
    />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoItem from "@/ui/modules/todo-app/components/todo-list/components/TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  computed: {
    ...mapGetters("todo", ["todoItems"]),
  },
  methods: {
    ...mapActions("todo", ["deleteItem"]),
  },
  onDelete(id) {},
  // data() {
  //   // return {
  //   //   todoItems: [
  //   //     { id: 1, text: "Один" },
  //   //     { id: 2, text: "Два" },
  //   //     { id: 3, text: "Три" },
  //   //   ],
  //   // };
  // },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
