# Ticket Viewer

With Ticket Viewer, you can view your Zendesk tickets in an organized manner with pagination. It also lets you view each ticket in more extensive detail!

I built it using React.js (used for the frontend) and Node.js (used for the backend). I decided to use Bootstrap because its predefined UI components are not only nice to look at but also easy to use. The pagination method I used was cursor pagination because it is more efficient than offset pagination and loading all tickets at once.

## Setting up your environment

Make sure you have downloaded Node.js and npm onto the system you will be using to run the project. This page is a good source of information for how to do this - <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>

## Downloading the project, installing dependencies and specifying credentials
You can clone this repository using the command below:

```bash
git clone https://github.com/anjvyas/ticket-viewer.git
```
Once the cloning process is complete you will need to specify credentials for your Zendesk account to be able to view the tickets on it.

To do this, you just need to make a copy of the .env.example file that is in the root directory, fill in the missing values as indicated and rename it as .env!

Here's a snapshot of the .env.example file for some context:

```bash
USERNAME={add your username here}
API_KEY={add your Zendesk API token here}
SUBDOMAIN={add your subdomain name here}
```
Lastly, you need to install the dependencies for the app onto your system so it runs correctly. These dependencies are listed in the package.json files present in the root directory and client directory. Navigate to each of these directories and run the command below as it will install all dependencies for the project for you.
```bash
npm install
```

## How to run the project

There are two steps in running the app.

First you have to start up the Node.js server and then you have to launch the client side. You can do this with the following series of commands.

```bash
cd ticket-viewer
npm start
```
This will cause something like this to show up in your terminal
```bash
❯ npm start

> ticket_viewer@1.0.0 start /Users/anjalivyas/Desktop/ticket_viewer
> node server/index.js

Server listening on 3001
```
Now open a new tab in your terminal and navigate to the client directory this time. Make sure you keep both tabs open while using the app.
```bash
cd ticket-viewer/client
npm start
```
This should trigger the opening of a new tab in your browser with the Ticket Viewer 🥳

Your terminal should look something like this for the client tab
```bash
Compiled successfully!

You can now view client in the browser.

  http://localhost:3000
```

## Running tests
Unfortunately I was not able to implement running unit tests in time. I would use Jest and supertest for this purpose if I had the opportunity to work on it some more.

Even though I wasn't able to run unit tests I did manually test the functionality of the app in different scenarios such as when a given ID didn't exist at all, the API wasn't reachable or the number of tickets was less than 25. 

## Thank you for your time!

