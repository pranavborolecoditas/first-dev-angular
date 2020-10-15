import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class ToggleSwitch extends LitElement {
    stateName: string;
    state: boolean;
    static get properties() {
        return {
            stateName: { type: String },
            state: { type: Boolean }
        };
    }

    static get styles() {
        return css`
        :host{
            display:flex;
            align-items:center;
            
        }
        .state-name{
            margin-right:8px;
            display: inline-block;
            position: relative;
        }
        .toggle-switch {
            height: 26px;
            width: 52px;
            border-radius: 15px;
            display: inline-block;
            position: relative;
            cursor: pointer;
       }
        .toggle-switch input {
            display: none;
       }
        .toggle-switch input:checked + .slider {
            background-color: chartreuse;
       }
        .toggle-switch input:checked + .slider::after {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
       }
        .toggle-switch .slider {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: grey;
            border-radius: 15px;
            transition: 0.5s;
       }
        .toggle-switch .slider::after {
            position: absolute;
            content: '';
            height: 18px;
            width: 18px;
            border-radius: 15px;
            background-color: white;
            left: 4px;
            bottom: 4px;
            transition: 0.5s;
       }`;
    }

    constructor() {
        super();
        this.state = false;
        this.stateName = '';
    }

    render() {
        return html`
        <label class="state-name">${this.stateName}</label>
        <label class="toggle-switch">
            <input type="checkbox" value="${this.stateName}" @click=${this.clickHandler}>
            <div class="slider"></div>
        </label>`;
    }

    clickHandler(event) {
        this.state = !this.state;
        let myEvent = new CustomEvent('my-event', {
            detail: { message: 'my-event happened.' },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }
}