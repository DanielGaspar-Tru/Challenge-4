## Summary

Challenge to make you code a small ReactJS app.

The app has the following features:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - user able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and have a separate Archived Tab.
- A button to archive all calls in the activity feed
- A button to unarchive all calls in the archived calls tab

## Installation

We're using [yarn](https://yarnpkg.com) here (but you can use npm):

```
yarn install
yarn start
```

## Project Structure

./src

- components: application components following the Atomic Design pattern
- constants: app's constants
- provider: app main context provider
- services: api and axios setup
- utils: utility functions
