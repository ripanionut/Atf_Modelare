const express = require("express");
const server = express();
const bodyParser = require("body-parser");

async function runServer() {
  await require("./db").connect();

  server.use(bodyParser.json());

  server.use("/api/auth/portfolios", require("./routes/portfolio"));

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log("Server ready on port:", PORT);
  });
}

runServer();