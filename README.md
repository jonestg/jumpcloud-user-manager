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

## Things I would do with more time
(What I think would be necessary for this to go into "production")
* Clean-up Organize the Data layer (vuex store)
  * Break into modules
  * Add support for paging
  * Add indexing to the single user access
* More thorough error handling
  * A central place to put messaging (so we don't have a bunch of one-off messages)
* A lot more testing
  * Because of the limited time I have available I mostly just have examples of tests
  * In a "real" implementation I would insist on covering everything. When an implementation is going to be worked on for more than a few weeks (or with more than a few people) having good coverage saves more time than it costs.
* Form validation
  * While I think the server should be the final check as to whether or not the model is valid, ideally I would also provide quicker feedback in form(before submission).
* Server-side Paging
  * The model here (loading all users then paging in memory) works OK for a local server (and a relatively small number of users) but would quickly become problematic for a backend seeing even moderate usage.
* Routing
  * This is obviously not necessary for an app with only one view. But, assuming it's not going to stay that way, it's a little cheaper to get it in place up front than to have to patch it in after you need another page.

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
