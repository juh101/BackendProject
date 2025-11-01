class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };

/*
Here’s a **concise summary with ranges**:

1. **1xx (100–199) – Informational:** Request received, processing continues.
2. **2xx (200–299) – Success:** Request succeeded.
3. **3xx (300–399) – Redirection:** Client must take further action (e.g., follow a new URL).
4. **4xx (400–499) – Client Error:** Bad request or unauthorized.
5. **5xx (500–599) – Server Error:** Server failed to process a valid request.

*/
