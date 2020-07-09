import { Container } from "inversify";

export const container = new Container();

export type Constructor<T = {}> = new (...args: any[]) => T;

export function Ioc<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        public container: Container;
  
        constructor(...args: any[]) {
            super(...args);
            this.container = container;
        }
    };
}