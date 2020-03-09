#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const INFO = {
  w00:
    "Gitbook activities can be found @ https://phillip-shields.gitbook.io/des501/topic-1/activity-1.1",
  w01:
    "Gitbook activities can be found @ https://phillip-shields.gitbook.io/des501/topic-2/activity-2.1",
  w02:
    "Gitbook activities can be found @ https://phillip-shields.gitbook.io/des501/topic-3/activity-3.1"
};

// configure cli options here
const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name",
    type: "string",
    demandOption: true
  })
  .option("j", {
    alias: "joke",
    describe: "joke topic",
    type: "string"
  })
  .option("w", {
    alias: "week",
    describe: "show info for week, week1 = w00, week2 = w01, and so on...",
    type: "string"
  }).argv;

//   entering name is required in options
const greeting = `Hello, ${options.name}`;
console.log(greeting);

// setup an if statement to handle different possibilities
if (options.joke) {
  displayJoke();
} else if (options.week) {
  displayWeek();
}

function displayJoke() {
  // search loading
  if (options.joke) {
    console.log(`lookin' for jokes about ${options.joke}...`);
  } else {
    console.log("random joke for you:");
  }
  // The url depends on searching or not
  const URL = options.search
    ? `https://icanhazdadjoke.com/search?term=${escape(options.search)}`
    : "https://icanhazdadjoke.com/";

  // get and display joke search results
  axios.get(URL, { headers: { Accept: "application/json" } }).then(res => {
    if (options.search) {
      res.data.results.forEach(j => {
        console.log("\n" + j.joke);
      });
      if (res.data.results.length === 0) {
        console.log(`nada for ${options.search}, try again dummy`);
      } else {
        console.log(res.data.joke);
      }
    }
  });
}

function displayWeek() {
  // show work
  if (options.week) {
    console.log(`lookin' for items related to ${options.week}...`);
    let key = options.week;
    console.log(INFO[key]);
  } else {
    console.log("no work found, check request command");
  }
}

function displayAdvice() {
  // throw some advice in there for ali
  axios.get("https://api.adviceslip.com/advice").then(res => {
    const advice = res.data.slip.advice;
    console.log(`Ali, here is some valuable advice for you today: ${advice}`);
  });
}

displayAdvice();