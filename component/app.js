import html from "../core.js";
import { connect } from "../store.js";
import header from "./header.js";
import todolist from "./todolist.js";
import footer from "./footer.js";

function app({ todos }) {
  return html`
    <section class="todoapp">
      ${header()} ${todos.length > 0 && todolist()}
      ${todos.length > 0 && footer()}
    </section>
  `;
}
export default connect()(app);
