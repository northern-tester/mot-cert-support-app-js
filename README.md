# Timesheet Manager

This provides the frontend for the Timesheet manager support app for the Automation in Testing Engineer learning journey. Please note this version was forked on Thursday 11th July 2024.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

As a minimum set of dependencies to install:

* Node 16 (at least)
* NPM for package management 9 (at least)
* Wiremock for mocked dependencies
* Visual Studio Code is preference for an IDE to work within.

Once you have your cloned version of the repo, you will need to run:

`npm install`

This will then install all the dependencies for the Timesheet Manager itself, these will be present in the `node_modules` folder.

You shouldn't need to install any npm packages globally to make the Timesheet Manager run.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
Please also note that this runs mocked services using wiremock too. If you want to run with real dependencies, use `npm start-mockless`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Running E2E Tests

To Run All Tests

`npx wdio run ./wdio.conf.js`

To Run An Individual Spec

`npx wdio run ./wdio.conf.js --spec login.e2e.js`

Please note that these are run headlessly to enable them to run in the pipeline as a Github action.

## Adding Tests

As well as getting up and running, here is some guidance for adding tests.

### Component Tests

Component tests (where a component is the react component) need to be added here

`mot-cert-support-app-js/src/__tests__`

Import the component you wish to test, use nock to add the mocked API dependencies you need.

### End to End Tests

End to end tests invoke a browser and you will require credentials to login. Please don't store any credentials in the project. One day it would be good to move them out of the repo, but the local ones don't matter so much.

## Pipelines

The pipeline is a Github Actions which does a few things:

* Runs the Unit and Component Tests
* Starts the Timesheet manager application
* Headlessly runs the end to end tests
* Creates a report based on the junit reporter
