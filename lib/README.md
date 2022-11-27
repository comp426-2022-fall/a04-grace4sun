# Assignment 03: Create a module-based line Node.js package (with CLI)

This assignment will help you learn to create an installable Node.js module package. You'll also provide a command line interface with it. 

## DO NOT CLONE THIS REPOSITORY DIRECTLY FROM THE TEMPLATE REPO

Use the personalized repository that is generated when you follow the GitHub classroom link instead: https://classroom.github.com/a/o2BI17QU

**_If you clone this repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it._**

## Description

The purpose of this assignment is to create an installable Node.js module package.

## Setup

1. After you've cloned your repository, run `npm init` and follow it through, adding and changing information as needed. 
2. Set package name to `node-dice`. 
2. Set the `main` file to be `./lib/roll.js`
3. Set the license to match the license in the repository.
4. Once your `package.json` file is created, set the `bin` file to be `"roll-dice": "./bin/cli.js"`
5. Install dependencies. You'll need minimist for this assignment to parse command line arguments.
6. Create directories `bin` and `lib` inside the root of the directory.
7. Create `roll.js` inside the `lib` directory. This is going to be the main file and also where you will put your dice-rolling function(s). 
8. Create `cli.js` inside the `bin` directory. This is going to be the file that runs when you link/install the package and run `roll-dice`.
9. Put the appropriate shebang in the `./bin/cli.js` file. 
10. Make sure `./bin/cli.js` is executable (i.e. run `chmod +x ./bin/cli.js`). 

## Requirements

There are two requirements for this assignment package:

1. A module that is importable using ES `import` method.
2. A a command line interface

### Module

Your module should be importable using the following:

`import { roll } from "/lib/roll.js"`

You will want this to be installable for a04 as well, so think about that. Read this for more info about importing: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

The `roll` function in `roll.js` should take three arguments:

1. number of sides for your dice, 
2. number of dice,
3. number of times rolled. 

The `roll` function should return an object with the following information:

```
{
  sides: x,
  dice: y,
  rolls: z,
  results: []
};
```

An example function call and output with some possible values:

```
roll(6,2,10)
```

```
{
  sides: 6,
  dice: 2,
  rolls: 10,
  results: [2,5,10,4,7,3,3,3,9,12]
};
```

The command line interface will be used to pass values to the arguments in your function.

There are [a lot](https://rocambille.github.io/en/2019/07/30/how-to-roll-a-dice-in-javascript/) [of examples](https://codepen.io/Pyremell/pen/eZGGXX/) [of how](https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/) to simulate/emulate dice rolling using JavaScript online. Make use of them and adapt them for your purposes. As long as you write an exportable function that can take the three arguments above, you should be good to go.

### CLI

Your command line interface should take three arguments with the following defaults:

1. `--sides`: the number of sides of the die you are rolling (default to 6 sides).
2. `--dice`: the number of dice you are rolling (default to 2 dice).
3. `--rolls`: the number of times the dice are rolled (default to 1 time).

Output should be in JSON and look like this: 

```
{"sides":6,"dice":2,"rolls":1,"results":[6]}
```

The returned JSON should include:

1. the number of sides for your dice (they will all be assumed to be the same),
2. the number of dice you are rolling,
3. the number of times you roll the dice, and
4. the total number of the dice added together.

An example for running your CLI script:

```
roll-dice --sides=10 --dice=2 --rolls=3
```

And an example output:
```
{"sides":10,"dice":2,"rolls":3,"results":[4,25,30]}
```

> HINT: Use `JSON.stringify()` to convert the output of your function to JSON. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
