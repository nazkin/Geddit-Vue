# geddit-clone-client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#1:26:00 making sure to show placeholders while data is being loaded

## Todo 
[x] Google Authentication
[x] Create user, subposts, posts and other data collections
[x] Implement Vuexfire for real-time bindings between firestore and vuex store
[x] Firestore Security rules.
    - Anyone can read posts and subposts
    - Only an authenticated user can post to firestore
[x] Hide the post form if the user is not logged in
[x] Show user information
[] Format date presentation
[] Upvoting and Downvoting posts
[x] Comments to posts
[x] Change security to allow users upload comments
[x] Search posts based on key words in the title and description