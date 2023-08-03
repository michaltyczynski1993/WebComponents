import {html, css, LitElement} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class CloseButton extends LitElement{

  static properties = {
    // belkaList: {type: Array},
    title: {type: String},
  }

  static get styles(){

    return css`
      button{
        background-color: var(--bttn-bg-color, #c2d1e9);
        border: none;
        border-radius: 20px;
        box-shadow: 8px 8px 11px -9px rgba(66, 68, 90, 1);
        padding: 1.5rem 2rem;
        color: black;
        font-size: 1.3rem;
        font-weight: bold;
      }

      button:hover{
        background-color: color-mix(in srgb,var(--bttn-bg-color, #c2d1e9),#000 25%);
      }

      button:active{
        background-color: color-mix(in srgb,var(--bttn-bg-color, #c2d1e9),#000 50%);
      }
    `
  }

  constructor(){
    super();
    this.belkaList = [];
    this.title;
    window.onload = () =>{
      this.belkaList = document.getElementsByTagName("aeh-belka");
      console.log(this.belkaList.length);
    }
  }

  closeBelka = () => { // Use arrow function here
    for (const belka of this.belkaList) { // Declare belka with const
      belka.removeOpen();
      console.log("closed");
    }
  };

  render() {
    return html`
    <button @click=${this.closeBelka}>${this.title}</button>
    `;
  }
}

customElements.define("close-button", CloseButton);