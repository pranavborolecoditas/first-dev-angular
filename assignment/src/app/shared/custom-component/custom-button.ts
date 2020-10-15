import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class CustomButton extends LitElement {
    buttonName : string;
    className: string;
    static get properties() {
        return {
            buttonName: { type: String },
            className: { type: String }
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
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                cursor: pointer;
                border: 1px solid transparent;
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: .25rem;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            .custom-button {
                background-color: #007bff;
                color: white;
                border-color: #007bff;
            }
            .danger-button {
                background-color: #dc3545;
                border-color: #dc3545;
                color: white;
            }
            button:hover {
                opacity: 0.8;
            }
        `;
      }
      constructor() {
        super();
        this.buttonName = 'button';
      }
      render() {
        return html`
            <button class="${this.className}">${this.buttonName}</button>
        `;
      }
}