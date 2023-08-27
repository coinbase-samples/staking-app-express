import { readFileSync } from 'fs';

const API_KEY_FILE_NAME = '.coinbase_cloud_api_key.json'

class ApiKey {
    public readonly name: string;
    public readonly privateKey: string;

    constructor() {
        this.name = '';
        this.privateKey = '';

        const apiKeyBlob = readFileSync(API_KEY_FILE_NAME, 'utf-8');
        const apiKeyJson = JSON.parse(apiKeyBlob);

        if (apiKeyJson["name"]) {
            this.name = apiKeyJson["name"];
        }

        if (apiKeyJson["privateKey"]) {
            this.privateKey = apiKeyJson["privateKey"];
        }
    }
}

class Authenticator {
    private readonly apiKey: ApiKey;

    constructor(apiKey: ApiKey) {
        this.apiKey = apiKey;
    }
}

