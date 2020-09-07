import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class CustomButton extends LitElement {
    buttonName : string;
    static get properties() {
        return {
            buttonName: { type: String }
        };
    }
      static get styles() {
        return css`
            :host{
                display:flex;
                align-items:center;
            }
            button {
                float: center;
                background-color: #4747d1;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                cursor: pointer;
            }
            button:hover {
                opacity: 0.8;
            }
        `;
      }
      constructor() {
        super();
        this.buttonName = 'demo';
        // this.stateName = '';
      }
      render() {
        return html`
            <button class="custom-button">${this.buttonName}</button>
        `;
      }
}