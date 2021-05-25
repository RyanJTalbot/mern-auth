## Mern Flashcards App

### Live Demo: https://ecstatic-allen-917012.netlify.app/

---

## Frontend :

### Setup: use npm install followed by npm start. Runs on localhost:3000

- React
- react-bootstrap for Navbar, Buttons, and the Question Choices

---

## Backend :

### Setup: npm install followed by npm start (or npm run server - will run with nodemon). Runs on localhost:8000

- passport
- mongodb
- node
- express
- OAuth with google

---

## To-Do :

#### - ~~Style Homepage add login / signin~~

#### - Add user profile and redirect to profile after auth.

#### - ~~Show/Hide Flashcards unless user is signed in.~~

#### - ~~Backend - I don't think current method of getting data from backend is most efficient - look for alternatives.~~

#### - ~~Flash card groups (maybe)~~

#### - When flashcard is clicked it changes color (I have no idea how to do this)

#### flashcard groups:

- ~~Mern~~
- ~~react~~
- ~~redux~~
- ~~node~~
- ~~express~~

### Add:

- Google auth Schema information
  - googleId
  - imageUrl
  - email
  - name
  - givenName
  - familyName

### Research:

- ~~why it won't render in safari~~
- ~~3rd party sign-in auth~~

### Miscellaneous :

### following files were changed to add api to routes:

- Backend: server.js
- frontend: authActions.js
  - ReactCards.js
  - Flashcards.js
  - \_redirects

## frontend: https://github.com/kaloraat/mern-auth-client

## backend: https://github.com/kaloraat/metn-auth-api

https://github.com/kaloraat/mern-auth-bundle

social login references:
https://aaryanadil.com/react-social-login-tutorial-google-facebook-and-twitter-oauth2

https://jasonwatmore.com/post/2020/10/25/react-facebook-login-tutorial-example

https://github.com/kaloraat/react-node-next-multi-user-blogging-platform/tree/master/120%20login%20with%20google%20backend

# Need to set up a session in the google authentication component
