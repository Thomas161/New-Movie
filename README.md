[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
[![CircleCI](https://circleci.com/gh/Thomas161/New-Movie/tree/prime.svg?style=svg)](https://circleci.com/gh/Thomas161/New-Movie/tree/prime)

![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)
[![firebase](https://firebase.google.com/images/brand-guidelines/logo-built_black.png)](https://firebase.google.com/)

# Movie Search SPA

:movie_camera: :clapper:

**Check me out**
https://my-movies-5080b.web.app/

It consumes an API via the themoviedatabase that allows the user to query movies, and thus rendering movie information to the frontend from the backend.

It also submits a movie review via user data inserted via a form that is sent to a backend database (firebase).

### Installation

`npm install`

### React App Scripts

`npm run start` Runs the app in the development mode.<br>
`npm run test` Launches the test runner in the interactive watch mode.<br>
`npm run build` build out for production/deployment

#### Tools and Attributions

- **TheMovieDatabase** => https://www.themoviedb.org/
- **Realtime DB** => https://console.firebase.google.com/
- **Build Tool** => https://circleci.com/

#### config.yml

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
