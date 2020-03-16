#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

let className;

// setup option to add entries
let INFO = {
  des01:
    "Gitbook activities submitted during week01 can be found here: https://phillip-shields.gitbook.io/des501/topic-1/activity-1.1",
  des02:
    "Gitbook activities submitted during week02 can be found here: https://phillip-shields.gitbook.io/des501/topic-2/activity-2.1",
  sdv00:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README0.md",
  sdv01:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README1.md",
  sdv02:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README2.md"
};

// configure cli options here
const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "-n <yourName>",
    type: "string",
    demandOption: true
  })
  .option("s", {
    alias: "select",
    describe: "-s <class+weekNumber>",
    type: "string"
  })
  .option("l", {
    alias: "list",
    describe: "-l list all current submissions in database"
  }).argv;

//   entering name is required in options
const greeting = () => `Hello, ${options.name}`;

// display -s selections
function displaySelection() {
  // show work
  console.log(`lookin' for items related to ${options.select}...`);
  let key = options.select;
  if (INFO[key]) {
    console.log(`
    
${INFO[key]}`);
  } else {
    console.log(
      `data for ${key} is not found, please check your selection and try again`
    );
  }
}

function displayAll() {
  console.log("Here are all the current submissions available");
  // console log all available submissions
  console.log(Object.keys(INFO));
}

// random unwanted advice given at the end
function displayAdvice() {
  // throw some advice in there for ali
  axios.get("https://api.adviceslip.com/advice").then(res => {
    const advice = res.data.slip.advice;
    console.log(`
    
${options.name}, here is some valuable advice for you today: ${advice}`);
  });
}

if (options.select) {
  displaySelection();
}

if (options.list) {
  displayAll();
}

displayAdvice();
