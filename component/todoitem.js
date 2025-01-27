import html from "../core.js";
import { connect } from "../store.js";
function todoItem({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"} ${editIndex === index &&
      "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          onchange="dispatch('toggle',${index})"
          ${todo.completed && "checked"}
        />
        <label ondblclick="dispatch('startEdit',${index})">${todo.title}</label>
        <button class="destroy" onclick="dispatch('delete',${index})"></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit',this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
        onblur="dispatch('endEdit',this.value.trim())"
      />
    </li>
  `;
}
export default connect()(todoItem);
