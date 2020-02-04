const express = require("express");
const app = express();
const PORT = 4000;

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

app.get("/hello/:productId", (req, res) => {
    res.write(`
        <h1>Hola ${req.params.productId}</h1>
    `)
})

app.get("/product-page", (req, res) => {
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body style="background-color: ${`rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`}">
          <h1>Hola chic@s!. PRODUCT PAGE</h1>
          <a href="/home">Go to home page</a>
      </body>
      </html>
      `);
  });

app.get("/home", (req, res) => {
  res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Hola chic@s! ${Math.random()}. HOME</h1>
        <a href="/product-page">Go to products page</a>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
