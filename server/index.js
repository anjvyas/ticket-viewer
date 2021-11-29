// importing required packages

// dotenv will help us read environment variables
require('dotenv').config()
const express = require("express");
const axios = require('axios');

const PORT = process.env.PORT || 3001;
const app = express();

// constructing the authorization header based on the username and zendesk api token
const auth_header = "Basic " + Buffer.from(process.env.USERNAME + "/" + "token:" + process.env.API_KEY).toString('base64')
// constructing the url used to fetch multiple tickets
const list_url = "https://" + process.env.SUBDOMAIN + ".zendesk.com/api/v2/tickets.json?page[size]=25"
// constructing the url used to fetch data for a single ticket
const details_url = "https://" + process.env.SUBDOMAIN + ".zendesk.com//api/v2/tickets/"

app.get("/tickets", (req, res) => {
  axios.get(list_url, {
    headers: {
      'Authorization': auth_header
    }
  })
    .then(res1 => {
      res.send(res1.data);
    })
    .catch(err =>
      {
      res.send(err);
    })
});

app.get("/tickets/prev/:before", (req, res) => {
  axios.get(list_url + "&page[before]=" + req.params.before, {
    headers: {
      'Authorization': auth_header
    }
  })
    .then(res1 => {
      res.send(res1.data);
    })
    .catch(err =>
      {
      res.send(err);
    })
});

app.get("/tickets/next/:after", (req, res) => {
  axios.get(list_url + "&page[after]=" + req.params.after, {
    headers: {
      'Authorization': auth_header
    }
  })
    .then(res1 => {
      res.send(res1.data);
    })
    .catch(err =>
      {
      res.send(err);
    })
});

app.get("/tickets/view/:id", (req, res) => {
  axios.get(details_url + req.params.id, {
    headers: {
      'Authorization': auth_header
    }
  })
    .then(res1 => {
      res.send(res1.data.ticket);
    })
    .catch(err =>
      {
      res.send(err);
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
