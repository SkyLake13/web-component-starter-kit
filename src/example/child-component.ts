import { LitElement, customElement, html, TemplateResult, property, css, CSSResult } from 'lit-element';
import { ExampleClient } from '../http/ExampleClient';
import { resolve } from '../decorator/resolve';

@customElement('example-child-component')
export class ExampleChildElement extends  LitElement {
    @property({
        type: String, reflect: true
    })
    public text: string = 'example component text';

    static get styles(): CSSResult[] {
        return [
            css`
            :host {
                display: block;
            }

            div {
                background-color: yellow;
            }`
        ];
    }

    @resolve(ExampleClient)
    private exampleClient?: ExampleClient;

    constructor() {
        super();

        if (this.exampleClient) {
            this.exampleClient?.get('todos').then(_ => {
                console.log(_?.data);
            })
        }
    }

    async firstUpdated(args: any): Promise<void> {
        console.log('---------firstUpdated--------');
        console.log(args);
        console.log('---------firstUpdated--------');
    }

    public render(): TemplateResult {
        return html`
            <div>${ this.text }</div>
        `;
    }

}