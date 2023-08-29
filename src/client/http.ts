import { Authenticator } from "../auth";
/**
 * Represents the required format for HTTP requests.
 */
type RequestType = {
  /** The path for the request, appended to the host URL. */
  path: string;

  /** HTTP method (e.g., GET, POST, PUT). */
  method: string;

  /** The body content of the request, can be null. */
  body: string | null;
};

/**
 * Handler function type to manage incoming requests.
 */
type RequestHandler = (
  /** The actual request data to be handled. */
  request: RequestType,

  /** Metadata related to the request. */
  meta: { service: string; method: string }
) => Promise<unknown>;

/**
 * Class to manage and handle HTTP requests.
 */
export class HttpRequestHandler {
  #hostUrl: string;
  #serviceName: string;
  #auth?: Authenticator | undefined;

  /**
   * Initializes the HttpRequestHandler with a given host URL.
   * @param hostUrl The URL of the host to which a service request will be made.
   * @param serviceName The name of the service to be accessed or utilized.
   * @param authenticator An authenticator instance to be used for authentication.
   */
  constructor(
    hostUrl: string,
    serviceName: string,
    authenticator?: Authenticator | undefined
  ) {
    this.#auth = authenticator;
    this.#serviceName = serviceName;
    this.#hostUrl = hostUrl;
  }

  /**
   * Handles the HTTP request, makes the actual call, and returns the response.
   * Throws an error if the response isn't ok.
   * @param request The request information including path, method, and body.
   * @param meta Metadata associated with the request.
   * @returns The response data as a promise.
   */
  requestHandler: RequestHandler = async (request, meta) => {
    const fullUrl = `${this.#hostUrl}/${request.path}`;

    let authString = "";
    if (this.#auth) {
      // Construct the authentication header.
      // See: https://github.com/coinbase/waas-client-library-go/blob/main/clients/transport.go
      const urlForAuth = prepareUrlForAuth(fullUrl);
      const jwt = await this.#auth?.buildJWT(
        `${this.#serviceName}`,
        `${request.method} ${urlForAuth}`
      );

      authString = `Bearer ${jwt}`;
    }

    const proxiedUrl = prepareUrlForProxy(fullUrl);
    // Making the actual fetch call to the server.
    const response = await fetch(proxiedUrl, {
      method: request.method,
      body: request.body,
      headers: {
        "Content-Type": "application/json",
        Authorization: authString,
      },
    });

    // Check if the response is not ok and handle the error.
    if (!response.ok) {
      // Parse the response body for a more detailed error message.
      let errorMessage = `HTTP error! Status: ${response.status}`;
      try {
        const responseBody = await response.text();
        if (responseBody) {
          errorMessage += ` - ${responseBody}`;
        }
      } catch (error) {
        console.error("Error parsing response body:", error);
      }

      // Log details for debugging.
      console.error("Request details:", {
        url: fullUrl,
        method: request.method,
        body: request.body,
        meta,
      });

      // Throw the detailed error.
      throw new Error(errorMessage);
    }

    return await response.json();
  };
}

/**
 * Prepares a given URL for authentication purposes by stripping certain components.
 * @param url The original URL that needs to be prepared.
 * @returns The prepared URL without the "https://" prefix and any query parameters.
 */
function prepareUrlForAuth(url: string): string {
  // Remove the "https://" prefix
  const prefix = "https://";
  if (url.startsWith(prefix)) {
    url = url.substring(prefix.length);
  }

  // Remove query parameters
  const queryIndex = url.indexOf("?");
  if (queryIndex !== -1) {
    url = url.substring(0, queryIndex);
  }

  return url;
}

/**
 * Prepares a given URL for webpack proxy purposes by removing the parts before `/waas/`.
 * @param fullUrl The original full URL that needs to be prepared.
 * @returns The prepared URL without the "https://{host}" prefix.
 */
function prepareUrlForProxy(fullUrl: string): string {
  const waasIndex = fullUrl.indexOf("/waas/");

  if (waasIndex !== -1) {
    return fullUrl.substring(waasIndex);
  }

  // Return original URL if '/waas/' is not found
  return fullUrl;
}
