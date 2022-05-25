abstract class HttpClient {
    protected _baseUrl: string;
    protected _apiKey: string;

    constructor(baseUrl: string, apiKey:string) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey
    }

    
}

export default HttpClient