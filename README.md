[![NPM version](https://badge.fury.io/js/esta.svg)](http://badge.fury.io/js/esta)
[![CircleCI](https://circleci.com/gh/Thomas161/New-Movie/tree/prime.svg?style=svg)](https://circleci.com/gh/Thomas161/New-Movie/tree/prime)

![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)
[![firebase](https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png)](https://firebase.google.com/)

# Movie Search SPA

It consumes an API via the themoviedatabase that allows the user to query movies, and thus rendering movie information to the frontend from the backend.

It also submits a movie review via user data inserted via a form that is sent to a backend database (firebase).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Tools and Attributions

**TheMovieDatabase** =>
API data provided via themoviedatabase, accessed through a key
https://www.themoviedb.org/

**Backend** =>
Database used for project uses the cloud platform Firebase
https://console.firebase.google.com/

**Testing/Build** =>
Testing achieved via React Scripts (create react app) and Continuous integration completed using CircleCI build tool.
https://circleci.com/

### config.yml

```python
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:10
    steps:
      - checkout
      - restore_cache: # special step to restore the dependency cache
          key: dependency-cache-{{ checksum "package.json" }}
      - run:
          name: Setup Dependencies
          command: npm install
      - run:
          name: Setup Code Climate test-reporter
          command: |
            curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
            chmod +x ./cc-test-reporter
      - save_cache: # special step to save the dependency cache
          key: dependency-cache-{{ checksum "package.json" }}
          paths:
            - ./node_modules
      - run: # run tests
          name: Run Test and Coverage
          command:
            npm test -- --coverage

```
