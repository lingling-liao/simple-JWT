// 生成 JWT token
const jsonwebtoken = require("jsonwebtoken");
const secretKey = "mysecretkey";
const expirationTime = 60;
const payloadData = {
  user_id: "UserA",
  email: "UserA@example.com",
};
const generatedToken = jsonwebtoken.sign(payloadData, secretKey, { expiresIn: expirationTime });

// Build server
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user/login", (req, res) => {
  const isUserValid =
    req.body.account === "UserA" && req.body.password === "ABC123";
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
