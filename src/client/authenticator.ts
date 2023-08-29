import { JWK, JWS } from "node-jose";

const legacyPemHeader = "-----BEGIN ECDSA Private Key-----";
const legacyPemFooter = "-----END ECDSA Private Key-----";
const pemHeader = "-----BEGIN EC PRIVATE KEY-----";
const pemFooter = "-----END EC PRIVATE KEY-----";

/**
 * Represents the API key details.
 */
export interface APIKey {
  /** The name of the API key. */
  name: string;
  /** The private key string. */
  privateKey: string;
}

/**
 * Represents the claims included in the JWT.
 */
interface APIKeyClaims {
  /** Audience of the JWT. */
  aud: string[];
  /** Subject of the JWT. Typically the identifier of the API key. */
  sub: string;
  /** Expiry time of the JWT in seconds. */
  exp: number;
  /** Time before which the JWT is not valid in seconds. */
  nbf: number;
  /** Issuer of the JWT. */
  iss: string;
  /** URI claim for the JWT. */
  uri: string;
}

/**
 * Class for creating and authenticating JWTs.
 * See: https://github.com/coinbase/waas-client-library-go/blob/main/auth
 */
export class Authenticator {
  /** The API key associated with the Authenticator instance. */
  apiKey: APIKey;

  /**
   * Constructs a new Authenticator instance.
   * @param apiKey The API key details.
   */
  constructor(apiKey: APIKey) {
    this.apiKey = apiKey;
  }

  /**
   * Build a JWT for the specified service and URI.
   * @param service The name of the service.
   * @param uri The URI for which the JWT is to be generated.
   * @returns The generated JWT.
   */
  async buildJWT(service: string, uri: string): Promise<string> {
    const pemPrivateKey = extractPemKey(this.apiKey.privateKey);
    let privateKey: JWK.Key;

    try {
      privateKey = await JWK.asKey(pemPrivateKey, "pem");
      if (privateKey.kty !== "EC") {
        throw new Error("Not an EC private key");
      }
    } catch (error) {
      throw new Error(`jwt: Could not decode or parse private key. ${error}`);
    }

    const header = {
      alg: "ES256",
      kid: this.apiKey.name,
      typ: "JWT",
      nonce: nonce(),
    };

    const claims: APIKeyClaims = {
      sub: this.apiKey.name,
      iss: "coinbase-cloud",
      nbf: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60, // +1 minute
      aud: [service],
      uri: uri,
    };

    const payload = Buffer.from(JSON.stringify(claims)).toString("utf8");

    try {
      const result = await JWS.createSign(
        { format: "compact", fields: header },
        privateKey
      )
        .update(payload)
        .final();

      return result as unknown as string;
    } catch (err) {
      throw new Error(`jwt: Failed to sign JWT. ${err}`);
    }
  }
}

/**
 * Extracts the PEM key from the given string.
 * @param privateKeyString The string for the private key from which to extract the PEM key.
 * @returns The extracted PEM key body.
 */
function extractPemKey(privateKeyString: string): string {
  // Remove all newline characters
  privateKeyString = privateKeyString.replace(/\n/g, "");

  // If the string starts with the standard PEM header and footer, return as is.
  if (
    privateKeyString.startsWith(pemHeader) &&
    privateKeyString.endsWith(pemFooter)
  ) {
    return privateKeyString;
  }

  // If the string starts with the legacy header and footer, replace them.
  const regex = new RegExp(
    `^${legacyPemHeader}([\\s\\S]+?)${legacyPemFooter}$`
  );

  const match = privateKeyString.match(regex);
  if (match && match[1]) {
    return pemHeader + match[1].trim() + pemFooter;
  }

  // The string does not match any of the expected formats.
  throw new Error("wrong format of API private key");
}

/**
 * Generates a nonce of 16 numeric characters.
 * @returns The generated nonce.
 */
function nonce(): string {
  const range = "0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += range.charAt(Math.floor(Math.random() * range.length));
  }

  return result;
}
