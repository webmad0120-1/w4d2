// express import (remember, previously you have to do npm i express)
const express = require("express");
// app is express instantiated
const app = express();
// web server - port number definition
const PORT = 3000;

// C -> create -> http verb POST
// R -> read -> http verb GET
// U -> update -> http verb PUT
// D -> delete -> http verb DELETE

// http:// -> communations protocol
// localhost -> my machine name
// :3000 -> port number
// /hello -> the endpoint i am checking

// express "hello" endpoint -> use http://localhost:3000/hello
app.get("/hello", (req, res) => {
  // when /hello is visited, it will yield the following JSON "{ hola: true }"
  res.json({ hola: Math.random() });
});

// we spin up the web server to listen to the PORT 3000
app.listen(PORT, () => {
  // after booting up the server, we report this to the executer user
  console.log(`listening on port ${PORT}`);
});
