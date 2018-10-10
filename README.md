# Features

```
* React, Redux, SSR, SCSS
* Bootstrap 4.1.3
* Redis based sessions
```

# Dependencies

```
* Node v10.7.0
* Redis
* Yarn 1.7.0
```

# Environment variables

```
* APP_NAME application name
* APP_PORT application port
* REDIS_HOST redis host
* REDIS_PORT redis port
* NODE_ENV variables for webpack
```

# Install Development

```
- yarn install
- APP_NAME=ExampleSite APP_PORT=3000 REDIS_HOST=localhost REDIS_PORT=6379 yarn run dev
```

### For tests

```
- yarn run test --watch
```

# Install Production

```
- yarn install
- yarn run build
- APP_NAME=ExampleSite APP_PORT=3000 REDIS_HOST=localhost REDIS_PORT=6379 yarn start
```
