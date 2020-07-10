import { HttpClient } from 'alltr-httpclient';

import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }
}

export interface Client {
    get(val: string): Promise<any>;
}

class BaseClient extends HttpClient {
    constructor() {
        super(config);
    }
}


export class ExampleClient extends BaseClient implements Client {
    constructor() {
        super()
    }
}





