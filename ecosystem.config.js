module.exports = {
  apps : [{
    name: "adminlte3conangular2022-main",
    script: "node_modules/@angular/cli/bin/ng",
    env_production: {
      NODE_ENV: "production",
    }
  },],

  deploy: {
    "production": {
        "user": "cesar",
        "host": "192.168.10.80",
        "ref": "origin/main",
        "repo": "https://github.com/cesarSins9902/adminlte3conangular2022-main.git",
        "path": "/home/cesar/deploy",
        "pre-setup": "pwd",
        "pre-deploy-local": "echo 'This is a local executed command'",
        "post-deploy": "cp../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production"
    },
},
};


