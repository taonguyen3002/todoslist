import html from "../core.js";
import { connect } from "../store.js";
import todoItem from "./todoitem.js";
function todolist({ todos, filter, filters }) {
  console.log(filters);
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('toggleAll', this.checked)"
        ${todos.every(filters.completed) && "checked"}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos
          .filter(filters[filter])
          .map((todo, index) => todoItem({ todo, index }))}
      </ul>
    </section>
  `;
}
export default connect()(todolist);
