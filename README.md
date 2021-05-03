# Demo
Demo app using: React, Redux, and Material UI. A form to create entries, and a list to view them.

## Some of the stack used:
react

redux

material-ui

react-router

jest

cypress

## Some design choices:
The navigation resembles more a menu, used here, than tabs, which was also a viable option.

States in the app are divided between redux store and useState, as application wide states, and component specific respectively. Alternatively everything could be in redux store

As there is no UI guidelines available at current time, styling is kept at Material UI defaults. This way it is easier to apply stock themes, and/or taking it towards any direction in the future.

Testing is limited to the code produced, and verification of used 3rd party library functionalities is left out of scope.

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
