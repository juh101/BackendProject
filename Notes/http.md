# HTTP – Short Notes

## ✅ What is HTTP?
HTTP (HyperText Transfer Protocol) is a communication protocol used between a client (browser/app) and a server.
- When you visit a website, your browser sends an HTTP request.
- The server responds with data such as HTML, images, JSON, videos, etc.

Example:
- Browser → "Give me home page"
- Server → "Here is the page (status 200 OK)"

HTTP is **stateless** → every request is treated separately.  
To maintain login sessions, websites use cookies, tokens, or sessions.

---

## ✅ HTTP vs HTTPS
| HTTP | HTTPS |
|------|-------|
| Data is sent as plain text | Data is encrypted (secure) |
| Can be read by hackers | Cannot be easily read/intercepted |
| Uses port 80 | Uses port 443 |
| No SSL/TLS certificate | Requires SSL/TLS certificate |

Example:
- `http://example.com` → Not secure
- `https://bank.com` → Secured with encryption

---

## ✅ URI, URL, URN

### ✔ URI (Uniform Resource Identifier)
A string that identifies a resource.
URI can be **URL** or **URN**.

### ✔ URL (Uniform Resource Locator)
Tells **where** the resource is and how to access it.

Example:

https://www.example.com:8080/path/page.html?user=juhi#section1

Breakdown:

https:// - Protocol (how to access it)
www.example.com	- Domain (where it is)
:8080	- Port (optional)
/path/page.html	- Path to the resource
?user=juhi	- Query parameters (optional)
#section1	- Fragment (specific part of page)

So a URL gives both the location and the method to access the resource.

### ✔ URN (Uniform Resource Name)
A URN is a URI that names a resource but doesn’t tell where it is or how to access it.
It’s like a unique, permanent name — useful for identifying something even if it moves.
Example:
`urn:isbn:978-3-16-148410-0`
This ISBN is the unique name of a book.

➡️ Summary:  
**All URLs are URIs**, but **not all URIs are URLs**.  
**URN is also a type of URI**.

---

## ✅ HTTP Headers
Headers are extra information sent with every request and response.

### ✔ Types of Headers
1. **Request Headers** → sent by client  
   Examples:  
   - `User-Agent`: Browser/app info  
   - `Authorization`: Tokens (like JWT)  
   - `Accept`: What type of response client accepts (`text/html`, `application/json`)

2. **Response Headers** → sent by server  
   Examples:  
   - `Content-Type`: Type of data returned (`text/html`, `image/png`, `application/json`)  
   - `Set-Cookie`: Set cookies in browser  
   - `Cache-Control`: Caching rules

### ✔ JWT in headers
JWT tokens are usually sent in **Authorization header**:
Authorization: Bearer <token>


---

## ✅ Common HTTP Headers + Examples

| Header | Meaning | Example |
|--------|---------|---------|
| Content-Type | Type of returned data | `Content-Type: application/json` |
| Authorization | Login/Access token | `Authorization: Bearer 78xys...` |
| User-Agent | Browser/app details | `Mozilla/5.0 Chrome` |
| Cache-Control | Caching rule | `Cache-Control: no-cache` |
| Set-Cookie | Server stores cookie | `Set-Cookie: session=123; HttpOnly` |

---

## ✅ Cache-Control (simple)
Controls how data is stored in browser cache.

Examples:
- `Cache-Control: no-cache` → Browser must re-check with server before using cached data
- `Cache-Control: no-store` → Do not save data anywhere (used for bank/payment pages)
- `Cache-Control: max-age=3600` → Cache for 1 hour (faster loading)

---

## ✅ HTTP Methods
| Method | Meaning | Example |
|--------|---------|---------|
| GET | Read data | Get user info |
| POST | Create new data | Create account, login |
| PUT | Update entire data | Update full profile |
| PATCH | Update part of data | Update only email or name |
| DELETE | Remove data | Delete user |
| HEAD | Like GET but only headers | Check if page exists |
| OPTIONS | Shows allowed methods | Server replies: GET, POST, DELETE |
| TRACE | Debugging, mirrors request | Rarely used for security reasons |

Example:
