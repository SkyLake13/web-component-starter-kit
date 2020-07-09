import { LitElement, customElement, html, TemplateResult, property, query, css, CSSResult } from 'lit-element';
import { ExampleClient } from '../http/ExampleClient';
import { Ioc } from '../mixin/mixin';

@customElement('example-component')
export class ExampleElement extends Ioc(LitElement) {
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
                background-color: blue;
            }`
        ];
    }

    @query('div')
    private div?: HTMLElement;

    private exampleClient: ExampleClient;

    constructor() {
        super();

        this.exampleClient = this.container.resolve(ExampleClient);

        console.log('---------constructor--------');
        console.log(this.div);
        console.log('---------constructor--------');
    }

    connectedCallback(): void {
        super.connectedCallback();
        console.log('---------connectedCallback--------');
        console.log(this.div);
        console.log('---------connectedCallback--------');
    }

    shouldUpdate(args: any): boolean {
        console.log('---------shouldUpdate--------');
        console.log(this.div);
        console.log(args);
        console.log('---------shouldUpdate--------');
        return true;
    }

    async firstUpdated(args: any): Promise<void> {
        const res = await this.exampleClient.get('todos');

        console.log(res.data);
        console.log('---------firstUpdated--------');
        console.log(this.div);
        console.log(args);
        console.log('---------firstUpdated--------');
    }

    updated(changedProps: any): void {
        super.updated(changedProps);
        console.log('---------updated--------');
        console.log(changedProps);
        console.log(this.div);
        console.log('---------updated--------');
    }
    

    disconnectedCallback(): void {
        this._updateLocalStorage('disconnected', 1)
        console.log('---------disconnectedCallback--------');
        console.log(this.div);
        console.log('---------disconnectedCallback--------');
    }

    _updateLocalStorage(key: string, value: number): void {
        if (localStorage.getItem(key)) {
            let val = Number(localStorage.getItem(key));
            if (val) {
                val = val + value;
                localStorage.setItem(key, val.toString());
            }
        } else {
            localStorage.setItem(key, value.toString());
        }
    }

    public render(): TemplateResult {
        const childText = 'this is child text';

        return html`
            <div>${ this.text }</div>
            <div>
                <example-child-component .text="${childText}"></example-child-component>
            </div>
        `;
    }
}