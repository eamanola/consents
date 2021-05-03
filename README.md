# Demo
Demo app using: React, Redux, and Material UI. A form to create entries, and a list to view them.

## Some of the stack used:
react

redux

material-ui

react-router

jest

cypress

## Design choices:
The navigation resembles more a menu, used here, than tabs, which was also a viable option.

States in the app are devided between redux store and useState, as application wide states, and component specific respectively. Alternatively eveything could be in redux store

## Getting started
### install
$ npm install

### running app
$ npm run server

$ npm start

### running unit tests
$ npm run test-server

$ npm test

### running e2w tests
$ npm run test-server

$ npm start

$ npm run cypress:open

or

$ npm run cypress:run

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

Start a local server

### `npm test`

Run unit tests

### `npm run test-server`

Start a local test server

### `npm run cypress:open`

Run cypress in GUI mode

### `npm run cypress:run`

Run cypress in CLI mode
