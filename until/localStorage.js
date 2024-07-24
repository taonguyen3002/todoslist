const todo_storage = "todos";
export default {
  get() {
    return JSON.parse(localStorage.getItem(todo_storage)) || [];
  },
  set(todos) {
    localStorage.setItem(todo_storage, JSON.stringify(todos));
  },
};
