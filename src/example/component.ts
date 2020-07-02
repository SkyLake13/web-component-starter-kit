import { LitElement, customElement, html, TemplateResult } from 'lit-element';

@customElement('example-component')
export class ExampleElement extends LitElement {
    private text: string = 'example component text';

    public render(): TemplateResult {
        return html`
            <div>${ this.text }</div>
        `;
    }
}