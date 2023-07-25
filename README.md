
# E-MarketHub

A Fullstack E-commerce website built using REACT js

## Demo
[Live Preview](https://markethub-f6f5e.web.app/)

![Alt text](smartmockups_lki9vgk4.jpg)
![Alt text](smartmockups_lki9szlg.jpg)


## Installation

run `git clone https://github.com/preston176/ShopMART-E-commerce`

```bash
  cd <folder-name>
  npm install

  then navigate to localhost:<port> displayed on cli (default is 5173)
```
## Features

- User Authentication
- Realtime Firebase Database
- Accepts payments through stripe 
- View your order history
- Responsive design
- Reusable components
- React Hooks (useStates, useEffects, Axios, Routing)

### How it works
```
API Configuration:
The code block sets up an Express server to handle API requests. It includes middleware for CORS and JSON parsing. Two API routes are defined: a GET request for the root route and a POST request for "/payments/create". The latter handles Stripe payment intents and returns the client secret needed for payment processing.

Payment Component:
This React component is responsible for handling the payment process. It uses Stripe's "react-stripe-js" and "Elements" libraries for card payment integration. The component manages states for processing, success, error, and disabled payment buttons. It generates a client secret from the backend server using Axios and sends the payment confirmation to Stripe. After successful payment, the order details are saved to Firebase Firestore.
```
```
1. Payment API:

Endpoint: /payments/create
Method: POST
Description: This API endpoint allows the client-side application to create a payment intent for the Stripe payment gateway.
Request Parameters:
total: The total amount of the payment in USD (query parameter)
Response:
Status Code: 201
Response Body: A JSON object containing the clientSecret, which is required for client-side payment confirmation with Stripe.
2. CORS and JSON Middlewares:

Description: The Cloud Function uses cors middleware to handle Cross-Origin Resource Sharing (CORS) to allow requests from the client-side application. It also uses express.json() middleware to parse JSON request bodies.
3. Root Endpoint:

Endpoint: /
Method: GET
Description: A simple root endpoint that responds with "hello world" to indicate that the API is functioning.
4. Stripe Integration:

Description: The Cloud Function integrates with the Stripe payment gateway to process payments. It uses the stripe library and the Stripe secret key (sk_test_51NUHNtEFBkCVrySQOc98N7TLtO0xwvmoaPSH81tp4f2uuPokh4mhZm094M9MOYNUBaj1Z68MmU9nPt6Ks9mQxzd400IariYDsd), which should be replaced with your actual Stripe secret key.
5. Deployment:

Description: The Cloud Function is deployed to Firebase Cloud Functions using Firebase CLI (firebase-functions) to make it accessible through a public URL.
```
## Contributing

I welcome contributions to make this project even better! Whether you are fixing a bug, improving the documentation, or adding new features, your efforts will be highly appreciated.

