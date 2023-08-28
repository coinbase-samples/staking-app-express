import * as jose from "jose";
import { createPrivateKey } from "crypto";
import { readFileSync } from "fs";

const API_KEY_FILE_NAME = ".coinbase_cloud_api_key.json";

export class ApiKey {
  public readonly name: string;
  public readonly privateKey: string;

  constructor() {
    this.name = "";
    this.privateKey = "";

    const apiKeyBlob = readFileSync(API_KEY_FILE_NAME, "utf-8");
    const apiKeyJson = JSON.parse(apiKeyBlob);

    if (apiKeyJson["name"]) {
      this.name = apiKeyJson["name"];
    }

    if (apiKeyJson["privateKey"]) {
      this.privateKey = apiKeyJson["privateKey"];
    }
  }
}

export class Authenticator {
  private readonly apiKey: ApiKey;

  constructor(apiKey: ApiKey) {
    this.apiKey = apiKey;
  }

  async buildJwt(service: string, uri: string): Promise<string> {
    try {
      const keyObject = createPrivateKey(this.apiKey.privateKey);

      const claims: jose.JWTPayload = {
        iss: "nick",
        sub: this.apiKey.name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        nbf: Math.floor(Date.now() / 1000),
        uri: uri,
      };

      const sig = new jose.SignJWT(claims)
        .setIssuer("nick")
        .setSubject(this.apiKey.name)
        .setExpirationTime("1h")
        .setNotBefore(Math.floor(Date.now() / 1000))
        .setAudience(service);
      sig.setProtectedHeader({ alg: "ES256" });
      const out = await sig.sign(keyObject);
      return out;
    } catch (err) {
      console.log(err);
      return "";
    }
  }
}
