[![NPM](https://nodei.co/npm/npm.png)](https://nodei.co/npm/npm/)

# New-Movie

Built with:

 Reactjs
 
 Firebase DB cloud platform
 
 Jest Testing
 
 Integration Testing
 
 Cloud Deployment using Heroku
 
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

### TheMovieDatabase
API data provided via themoviedatabase, accessed through a key
https://www.themoviedb.org/

## Backend

Database used for project uses the cloud platform Firebase
https://console.firebase.google.com/

### server.js config file

```python

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDBBH7eOJ2JmlwpSf86s3q8UWkEIzipujw",
  authDomain: "moviedb-a465c.firebaseapp.com",
  databaseURL: "https://moviedb-a465c.firebaseio.com",
  projectId: "moviedb-a465c",
  storageBucket: "moviedb-a465c.appspot.com",
  messagingSenderId: "41769656374"
};
const fire = firebase.initializeApp(config);

export default fire;

```

## Testing/Build

Testing achieved via React Scripts (create react app) and Continuous integration completed using CircleCI build tool.
https://circleci.com/


### build script
```python

```

## Deployment

Using Heroku cloud platform, i was able to deploy: https://movie-app2015.herokuapp.com/




