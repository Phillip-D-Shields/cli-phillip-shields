# Hey Ali 
## this nifty little cli-tool will be submitted instead of all my class submissions. It's pretty simple, but read the instructions below. Future updates will include data for future submissions. Enjoy

### To install:
1. fork or clone this repo, I made you a collaborator 
2. navigate to the root and run `npm install -g`
3. enter the following `hello`

`hello` command should prompt the following in your terminal

```
$ hello
Usage: -n <name>
Options:
  --help           Show help                       [boolean]
  --version        Show version number             [boolean]
  -n, --name       -n <yourName>         [string] [required]
  -s, --select     -s <class+weekNumber>            [string]
Missing required argument: n
```
the program likes your name, it won't do anything for you unless you share your name first thing, enter `hello -n Ali` and it should reply, and maybe even give you some good advice. `hello` begins the app, `-n` calls and assigns `Ali` as the user.

My submission data is stored in an object using key value pairs. To select and view data we use the `-s` command followed by the class and week number we want to view.

SDV503=`svd`, DES501=`des`
week1=`00`, week2=`01`, week3=`02`, and so on ....

so a normal submission query would look like this 
`hello -n Ali -s svd00`

simply put, for now your query will follow this format
`hello -n <name> -s <class+weekNumber>`  


if for some reason you wanted to uninstall my cli app `npm uninstall -g cli-phillip-shields`
## i got some ideas for this, so it will get better in time.

alternatively, i have included the links below.

    "Gitbook activities submitted during week01 can be found here: https://phillip-shields.gitbook.io/des501/topic-1/activity-1.1",
  des02:
    "Gitbook activities submitted during week02 can be found here: https://phillip-shields.gitbook.io/des501/topic-2/activity-2.1",
  des03:
    "Gitbook activities submitted for Topic03 can be found here: https://phillip-shields.gitbook.io/des501/topic-3/activity-3.1",
  sdv00:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README0.md",
  sdv01:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README1.md",
  sdv02:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README2.md",
  sdv03:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README3.md",
  sdv04:
    "the readme.md for this lab can be found here: https://github.com/Phillip-D-Shields/sdv-labs/blob/master/README4.md",
