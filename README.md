# Ali 
## this nifty little cli-tool will be submitted instead of all my class submissions. It's pretty simple, but read the instructions below. Future updates will include data for future submissions. Enjoy

## To install:
1.fork or clone this repo, I made you a collaborator 
2.navigate to the root and run `npm install -g`
3.enter the following `hello`

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
the program likes your name, it won't do anything for you unless share your name first thing, enter `hello -n Ali` and it should reply, and maybe even give you some good advice. `hello` begins the app, `-n` calls and assigns `Ali` as the user.

Now you are ready to look up my submission data. It is stored in an object using key value pairs. To select and view data we use the `-s` command followed by the class and week number we want to view.

SDV503=`svd`, DES501=`des`
week1=`00`, week2=`01`, week3=`02`, and so on ....

so a normal submission query would look like this 
`hello -n Ali -s svd00`

simply put, for now your query will follow this format
`hello -n <name> -s <class+weekNumber>  


## i got some ideas for this, so it will get better in time.