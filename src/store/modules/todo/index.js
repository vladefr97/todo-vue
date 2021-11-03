const state = {
  todoItems: [
    { id: 1, text: "Одын" },
    { id: 2, text: "Два" },
    { id: 3, text: "Три" },
  ],
};
const getters = {
  todoItems: (state) => state.todoItems,
};
const actions = {
  addTodoItem(store, text) {
    store.commit("ADD_TODO_ITEM");
  },
};
const mutations = {
  ADD_TODO_ITEM(state, text) {
    state.todoItems.push({ id: new Date().getTime(), text });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
