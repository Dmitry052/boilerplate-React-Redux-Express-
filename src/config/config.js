module.exports = {
  development: {
    api: {
      host: "",
      port: ""
    },
    server: {
      host: "http://localhost",
      port: 3000
    },
    redis: {
      host: "localhost",
      port: 6379
    }
  },
  production: {
    api: {
      host: "",
      port: ""
    },
    server: {
      host: "",
      port: 80
    },
    redis: {
      host: "localhost",
      port: 6379
    }
  }
};
