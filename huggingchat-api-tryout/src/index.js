const express = require("express");
const app = express();
const port = 3000;
const Login = require("./login");

// Middlewares to parse JSON content in POST bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/helloworld", async (req, res) => {
  huggingchat = new Login("testhelloworld04@gmail.com", "TgUGLRcL1qCMbmP");
  await huggingchat.login("usercookies");

  res.send("GET Hello World!");
});

app.post("/helloworld", (req, res) => {
  const requestBody = req.body;

  console.log(
    `Received POST request with body: ${JSON.stringify(requestBody)}`
  );

  res
    .status(201)
    .send(
      "POST Hello World received with body: " + JSON.stringify(requestBody)
    );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
