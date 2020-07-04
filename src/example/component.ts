import { LitElement, customElement, html, TemplateResult, property, query, css, CSSResult } from 'lit-element';

@customElement('example-component')
export class ExampleElement extends LitElement {
    @property({
        type: String, reflect: true
    })
    public text: string = 'example component text';

    @query('div')
    private container?: HTMLElement;

    static get styles(): CSSResult {
        return css`
            :host {
                display: block;
            }

            div {
                background-color: blue;
            }
        `;
    }

    constructor() {
        super();

        console.log('---------constructor--------');
        console.log(this.container);
        console.log('---------constructor--------');
    }

    connectedCallback(): void {
        super.connectedCallback();
        console.log('---------connectedCallback--------');
        console.log(this.container);
        console.log('---------connectedCallback--------');
    }

    shouldUpdate(): boolean {
        console.log('---------shouldUpdate--------');
        console.log(this.container);
        console.log('---------shouldUpdate--------');
        return true;
    }

    firstUpdated(): void {
        console.log('---------firstUpdated--------');
        console.log(this.container);
        console.log('---------firstUpdated--------');
    }

    updated(changedProps: any): void {
        super.updated(changedProps);
        console.log('---------updated--------');
        console.log(this.container);
        console.log('---------updated--------');
    }
    

    disconnectedCallback(): void {
        this._updateLocalStorage('disconnected', 1)
        console.log('---------disconnectedCallback--------');
        console.log(this.container);
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
        return html`
            <div>${ this.text }</div>
        `;
    }
}