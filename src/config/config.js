module.exports = {
  development: {
    name: "boilerplate-DEV",
    api: {
      host: "",
      port: ""
    },
    server: {
      host: "http://localhost",
      port: 3000,
      routesPrefix: ""
    },
    redis: {
      host: "localhost",
      port: 6379
    }
  },
  production: {
    name: "boilerplate-PROD",
    api: {
      host: "http://localhost",
      port: "3000"
    },
    server: {
      host: "",
      port: 80,
      routesPrefix: ""
    },
    redis: {
      host: "localhost",
      port: 6379
    }
  }
};
