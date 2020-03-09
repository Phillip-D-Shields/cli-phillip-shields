#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const INFO = {
    w00: "Gitbook activities can be found @ https://phillip-shields.gitbook.io/des501/topic-1/activity-1.1",
    w01: "Gitbook activities can be found @ https://phillip-shields.gitbook.io/des501/topic-2/activity-2.1",
    w02: "Gitbook activities can be found @ https://phillip-shields.gitbook.io/des501/topic-3/activity-3.1"
}

// configure cli options here
const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name",
    type: "string",
    demandOption: true
  })
  .option("s", {
    alias: "search",
    describe: "search input",
    type: "string"
  })
  .option("sw", {
      alias: "showWork",
      describe: "show work for week__",
      type: "string"
  })
  .argv;

//   entering name is required in options
const greeting = `Hello, ${options.name}`;

console.log(greeting);


// search loading
if (options.search) {
  console.log(`lookin' for jokes about ${options.search}...`);
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
})

// show work 
if (options.showWork) {
    console.log(`lookin' for items related to ${options.showWork}...`);
  } else {
    console.log("no work found, check request command");
  }
