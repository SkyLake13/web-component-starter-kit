import { HttpClient } from "./HttpClient";
import { AxiosRequestConfig, AxiosResponse } from "axios";

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

export class ExampleClient extends HttpClient {
    constructor() {
        super(config)

        this.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param,
        }));

        this.interceptors.response.use((param: AxiosResponse) => ({
            ...param
        }));
    }
}