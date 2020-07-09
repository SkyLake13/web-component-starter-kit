import { injectable } from "inversify";


@injectable()
export class ExampleClient {
    constructor() {
    }

    public get(_val: any): Promise<any> {
        return Promise.resolve({ data: 'Abhishek' });
    }
}