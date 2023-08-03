import {html, css, LitElement} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class AehBelka extends LitElement{

    static properties = {
        title: {type: String},
        helpText: {type: String},

    }
    
    constructor(){
        super();
        this.title;
        this.helpText;
        
    }

    static styles = [
        css`

          blockquote {
            margin: 0;
            background-color: #f0f0f0;
          }
    
          ::slotted(img) {
            margin: 0 auto;
            display: block;
            max-width: 90%;
          }
    
          summary {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 1.25rem 5rem;
            background-color: var(--background-color, #c2d1e9);
            box-shadow: 8px 8px 11px -9px rgba(66, 68, 90, 1);
            align-items: center;
            font-weight: bold;
            cursor: pointer;
            border-radius: 20px;
    
            transition: margin 0.4s ease-out;
            text-align: center;
          }
    
          details {
            margin: 1rem 0;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: var(--text-color, black);
          }
    
          .belka-title {
            font-size: 1.3rem;
          }
          .belka-help {
            font-size: 0.8rem;
            margin-left: 0.8rem;
          }
          .content {
            background-color: var(--content-bg-color, #dfeef600);
            border-radius: 20px;
            padding: 1rem 1rem;
            box-shadow: 8px 8px 11px -9px rgba(66, 68, 90, 1);
            margin-top: 0.1rem;
          }
    
          details[open] summary {
            margin-bottom: 10px;
          }
    
          @media (max-width: 450px) {
            summary {
              padding: 0.7rem 3rem;
            }
          }
        `
    ];

    render(){
        return html`
        <details>
      <summary>
        <div class="belka-title">${this.title}</div>
        <div class="belka-help">${this.helpText || "Kliknij tutaj, aby wyświetlić"}</div>
      </summary>
      <div class="content">
        <slot></slot>
      </div>
    </details>`;
    }

    removeOpen(){
      const details = this.shadowRoot.querySelector('details');
      if (details.hasAttribute("open")) {
        details.removeAttribute("open");
      }
    }

}

customElements.define('aeh-belka', AehBelka);