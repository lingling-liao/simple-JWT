// Generate JWT token
const jsonwebtoken = require("jsonwebtoken");

// Set the secret key for JWT (should be kept confidential)
const secretKey = "mysecretkey";

// Set the expiration time for JWT to 1 hour
const expirationTime = 60;

// Configure the payload of JWT to include any number of key/value pairs
const payloadData = {
  user_id: "A User",
  email: "AUser@wistron.com",
};

// Use the jsonwebtoken package to generate a JWT
const generatedToken = jsonwebtoken.sign(payloadData, secretKey, { expiresIn: expirationTime });

// Build server
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user/login", (req, res) => {
  const isUserValid =
    req.body.account === "A User" && req.body.password === "ABC1010";
  if (isUserValid) {
    res.send({ token: generatedToken });
  }
});

app.post("/user/verify", (req, res) => {
  try {
    const verificationResult = jsonwebtoken.verify(req.body.token, secretKey);
    if (verificationResult) {
      res.send({ status: "verified" });
    }
  } catch (error) {
    console.log(error.message, "==error");
    if (error.message.includes("jwt expired")) {
      res.send({ status: "fail", reason: "Token is expired." });
    } else {
      res.send({ status: "fail", reason: "JWT verification failed." });
    }
  }
});

app.listen(3000, () => console.log("Node server is running."));
