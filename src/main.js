import { defineCustomElement } from "vue";
import GridPoc from "./grid-poc.ce.vue";

const element = defineCustomElement(GridPoc);

customElements.define("grid-poc", element);
