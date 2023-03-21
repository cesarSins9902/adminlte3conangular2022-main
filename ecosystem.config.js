module.exports = {
  apps : [{
    name: "adminlte3conangular2022-main",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
