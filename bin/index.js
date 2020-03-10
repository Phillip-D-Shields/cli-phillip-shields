#!/usr/bin/env node

// Ali, this nifty little cli-tool will be submitted repeatedly in place of a word doc or url to my labs, journals, and any other submitted work. 

// To install:
// 1.navigate to the root of directory 'cli-phillip-shields'
// 2.run the following command: npm install
// 3.enter the following: hello

// hello command should prompt the following in your terminal   
// $ hello
// Usage: -n <name>
// Options:
//   --help           Show help                       [boolean]
//   --version        Show version number             [boolean]
//   -n, --name       -n <yourName>         [string] [required]
//   -s, --select     -s <class+weekNumber>            [string]
// Missing required argument: n

// my submission data is stored in an object using key value pairs
// to access week 1 work in DES501 you would enter: -s des00
// to access week 3 work in SVD503 you would enter: -s svd02

// the program likes your name, as well, so enter your name after saying hello
// enter the following: hello -n Ali

// Now you are ready to look up submission data, lets start with SVD503 work
// from week 2
// enter the following: hello -n Ali -s svd01

// i think from here, you should be able to use my cli app with ease
// i will add features in the future, so stay tuned



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
    
Ali, here is some valuable advice for you today: ${advice}`);
  });
}

displayAdvice();
