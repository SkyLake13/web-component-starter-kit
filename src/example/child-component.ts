import { LitElement, customElement, html, TemplateResult, property, css, CSSResult } from 'lit-element';
import { ExampleClient } from '../http/ExampleClient';


@customElement('example-child-component')
export class ExampleChildElement extends LitElement {
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

    private exampleClient?: ExampleClient;

    constructor() {
        super();

        if ((<any>globalThis).exampleClient) {
            this.exampleClient = (<any>globalThis).exampleClient;
        }
    }

    async firstUpdated(args: any): Promise<void> {
        const res = await this.exampleClient?.get('todos');

        console.log(res?.data);
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