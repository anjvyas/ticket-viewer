// need to require this package so we can read environment variables
require('dotenv').config()

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("https://zccanjalivyas.zendesk.com/api/v2/tickets", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});