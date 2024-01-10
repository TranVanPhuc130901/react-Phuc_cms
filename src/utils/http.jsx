import axios , {AxiosInstance} from "axios";

export default class Http {
    // instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:8989/api',
            timeout: 10000,
            headers: {
                'Content-Type' : 'application/json'
            }
        });
    }
}