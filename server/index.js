// importing required packages

// dotenv will help us read environment variables
require('dotenv').config()
const express = require("express");
const axios = require('axios');

const PORT = process.env.PORT || 3001;
const app = express();

// constructing the authorization header based on the username and zendesk api token
const auth_header = "Basic " + Buffer.from(process.env.USERNAME + "/" + "token:" + process.env.API_KEY).toString('base64')
// constructing the url to fetch data from based on the specified subdomain
const url = "https://" + process.env.SUBDOMAIN + ".zendesk.com/api/v2/tickets"

app.get("/home", (req, res) => {
  axios.get(url, {
    headers: {
      'Authorization': auth_header
    }
  })
    .then(res1 => {
      res.send(res1.data.tickets);
    })
    .catch(err =>
      {
      res.send(err);
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});