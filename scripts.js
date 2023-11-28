//import { LitElement, html, css } from "./lit-html";
import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * @element tally-app
 * @prop {number} count
 */
class TallyApp extends LitElement {
    static properties = {
        count: {type: Number},
      };

           
static styles = css `
* {
    box-sizing: border-box;
}
#add {
    border: 20px solid black;
    font-size: 40px;
}

#subtract {
    border: 20px solid grey;
    font-size: 40px;
}

#count {
    border: 10px solid navy;
    width: 45px;
    text-align: center;
    align-self: center;
    font-size: 30px;
    padding: 30px;
}

.body {
    background-color: beige;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.header {
    text-align: center;
    text-decoration: underline;
}

.reset {
    font-size: 20px;
    border: 10px solid beige;
}
`
    constructor() {
        super()
        this.count = 0;
    }

    /**
     * @returns {any}
     */
    render() {
return html `
<div class="body">
<h1 class="header">Tally App</h1>
    <p id="count">${this.count}</p>
        <button id="add" @click=${this._addTally}>+</button>
        <button id="subtract" @click=${this._subtractTally}>-</button>
    <button class="reset" @click=${this._resetTally}>Reset</button>
    </div>
`
}
_addTally(e) {
    if (this.count === 10) {
        button.disabled == true
    } else {
        this.count++;
    }
  }

  _subtractTally(e) {
    if (this.count === -10) {
        button.disabled == true
    } else {
        this.count--;
    }
  }
  _resetTally(e) {
    this.count = 0;
  }}

customElements.define("tally-app", TallyApp)

