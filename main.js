import { attach } from "./store.js";
import app from "./component/app.js";

attach(app, document.querySelector("#roots"));
