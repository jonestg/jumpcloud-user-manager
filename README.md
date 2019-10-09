# JumpCloud User Manager

## Product Requirements
* List the users in your JumpCloud organization
* Create a new user
* Update an existing user
* Delete a user
* Clean user experience

## Assumptions
* Material will match JumpCloud's look and feel
* This app will be loaded behind behind a log-in
* The server will implicitly know the logged user and only allow access to the appropriate users
* The System User manager will be one page that is a part of a bigger app
* I don't need to actually implement or match the api exactly (I'll use an out of the box REST server)
* It's more important to show testing principles than to actually test everything (for the sake of time)

## Technical Choices
### UI Framework
Vue.js

### Component Library
~~__Vue Material__ - Seems to have the components I need as well as a large user-base~~
The bulk of Vue Materials components are in beta and a little buggy

__Vuetify__ - Has a large user base good documentation and lots of examples

### Testing
__Unit tests__: Jest
__Component tests__: Jest w/ built in component constructor
__UI tests__: Puppeteer

### Server
__json-server__: Requires very little setup. Though it doesn't match the api exactly


###Design considerations
I don't have visibility into JumpCloud's UI so I'm going to go with a Material look and feel.
####Landing page
Just a list of users.

## Project setup
```
npm install
npm start
```
Then open the app at http://localhost:8080

### Compiles and minifies for production
```
npm run build
```

### Run all tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
