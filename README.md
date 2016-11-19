# PiggyWash!

## A game built in React.js

After weeks of learning Ruby on Rails, we got a taste of JavaScript. After a week of training, we were assigned a task of creating a game in React.js to show off what we have learned. The out come was Piggywash!

## Idea of the game
* There are two players and the game will start once Player2 joins.
* When Player2 has joined, the initial countdown of 3 seconds will start, at the end of the countdown the game will begind and the spots will appear on the piggy. 
* Players will then have 5 seconds to simultaneously click on the spots to clean them. Once a spot has been clicked, the other player cannot click that spot anymore and the point goes to the player who clicked it.
* At the end of 5 seconds, the points are counted and the winner is displayed - together with a very happy piggy.gif.

## Quick look at the game:
![gameimage](http://res.cloudinary.com/dfc7k24vb/image/upload/v1479557460/Screen_Shot_2016-11-19_at_13.10.15_zhppln.png "Piggywash Screenshot")

For a full visual of the game, have a look here:
https://drive.google.com/open?id=0ByKMF9fz2TRqWWlMZ3hRZjhZZUk

## Learnings
* Functional programming vs. Object Oriented Programming
* Practice JavaScript and get used to the syntax.
* How to navigate through React.js.
* The (re)use of components.
* Redux Store.
* React Router.
* Testing in React.js.
* What are and how to use Websockets.

# FeathersJS + React + Webpack

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/project; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
