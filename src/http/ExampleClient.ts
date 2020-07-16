export interface Client {
    get(val: string): Promise<any>;
}

class BaseClient {
    public get(val: string): Promise<any> {
        return Promise.resolve({ data: ['Abhishek', val] });
    }
}


export class ExampleClient extends BaseClient implements Client {
    constructor() {
        super()
    }
}





