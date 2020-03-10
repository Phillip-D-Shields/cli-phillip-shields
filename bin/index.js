#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

let className;

const INFO = {
  des00:
    "Gitbook activities can be found here: https://phillip-shields.gitbook.io/des501/topic-1/activity-1.1",
  des01:
    "Gitbook activities can be found here: https://phillip-shields.gitbook.io/des501/topic-2/activity-2.1",
  des02:
    "Gitbook activities can be found here: https://phillip-shields.gitbook.io/des501/topic-3/activity-3.1",
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
    describe:
      "-s <class+weekNumber>",
    type: "string"
  }).argv;

//   entering name is required in options
const greeting = `Hello, ${options.name}`;
console.log(greeting);

if (options.select) {
  displaySelection();
}

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

function displayAdvice() {
  // throw some advice in there for ali
  axios.get("https://api.adviceslip.com/advice").then(res => {
    const advice = res.data.slip.advice;
    console.log(`
    
${options.name}, here is some valuable advice for you today: ${advice}`);
  });
}

displayAdvice();
