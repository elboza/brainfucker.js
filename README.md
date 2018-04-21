# brainfucker.js

## a brainfuck interpreter for nodejs and browsers.

brainfucker.js is a powerful interpreter for brainfuck with many features:

- `ng` enables a superset of brainfuck with the addition of two symbols( `!` and `?` ) to write and read a number from input.
- `reversefuck` switch the interpreter to reversefuck mode where the semantic of all the commands are inverted
- `data='datum'` set the initial environment to be equal to 'datum' instead of all zeros
- `oenv` outputs the environment resulting at the end of the bf computation instead of the standard output ( `!` `.` )

It can be used as a node module or included directly into a web page.

## install

```
$ npm install brainfucker.js
```
or
```
$ git clone <this repo>
$ npm install
```

### brainfucker.js as a node module

```
var bf=require('brainfucker.js');

let x=bf.run('+++![>+<-]>!',null,true);
console.log(x.out);
```
the `run` parameters are (in order):

- the bf code
- the initial enviromnent (optional)
- the ng expensions (optional)
- the reversefuck mode (optional)

### brainfucker.js into a web page

```
$ npm install
```
or
```
$ npm run web
```
to generate the files that you can include in a web page. either:

- ./web/brainfucker.js
- ./web/brainfucker.min.js

and then just copy the file to your web project and link to it:
```
<script src="path_to_file/brainfucker.min.js"></script>
```
you can put your brainfuck code into a brainfuck tag. All the brainfuck tags will be processed:
```
<html>
<head>
</head>
<body>
pippo<br>
<brainfuck ng>
+++[>+<-]>!
hhj
</brainfuck>
<br>
<brainfuck ng data="fff" oenv>
>+
</brainfuck>
<br>
<brainfuck ng reversefuck>
---]<->+[<<>?
</brainfuck>
<script src="brainfucker.min.js"></script>
</body>
</html>
```
You can pass the oprions as a tag arguments.


Or you can use brainfucker.js as in the node module by refering to its class.


#### That's all falks!

```
 _____
< bye >
 -----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```
