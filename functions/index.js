const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51NUHNtEFBkCVrySQOc98N7TLtO0xwvmoaPSH81tp4f2uuPokh4mhZm094M9MOYNUBaj1Z68MmU9nPt6Ks9mQxzd400IariYDsd");
// API

// -App config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret, // Corrected property name
  });
});

// -Listener


exports.api = functions.https.onRequest(app);
