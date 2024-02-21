import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("kulp-plugin.kulp-counter")
export class KulpCounter extends LitElement {
    @property({ type: Number }) count = 0;

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    render() {
        return html`
        <div>
            <h1>Count: ${this.count}</h1>
            <button @click=${this.increment}>Increment</button>
            <button @click=${this.decrement}>Decrement</button>
        </div>
        `;
    }
}