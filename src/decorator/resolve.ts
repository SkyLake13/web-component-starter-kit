import { InjectionToken, container } from 'tsyringe';

export function resolve(token: InjectionToken) {
    return (target: any, key: string | symbol) => {
        const getter = () => {
            return container.resolve(token);
        };

        const setter = () => {
            console.error(`Value cannot be set for property '${String(key)}' of Class '${target.constructor?.name}'`);
        }

        // refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: false
        });
    }
}