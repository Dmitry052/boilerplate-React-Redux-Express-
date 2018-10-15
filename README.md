# Boilerplate for quickly start developing an application.

## Features

```
* React, Redux, SSR, SCSS, Flow, Jest, Enzyme
* Bootstrap 4.1.3
* Redis based sessions
```

## Dependencies

```
* Node v10.7.0
* Redis (custom, default -> ON)
* Yarn 1.7.0
```

## Environment variables

```
* APP_NAME application name
* APP_PORT application port
* REDIS set "false" if you don't want using redis for session
* REDIS_HOST redis host
* REDIS_PORT redis port
* NODE_ENV variables for webpack
* ROUTES_PREFIX prefix for url (http://myapp:3000/prefix/firstpage)
```

## Install Development

```
- yarn install
- yarn run flow:typed
- APP_NAME=ExampleSite APP_PORT=3000 REDIS_HOST=localhost REDIS_PORT=6379 yarn run dev
```

### Run tests

```
- yarn run test --watch
```

## Install Production

```
- yarn install
- yarn run build
- APP_NAME=ExampleSite APP_PORT=3000 REDIS_HOST=localhost REDIS_PORT=6379 yarn start
```
