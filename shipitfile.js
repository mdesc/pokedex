// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)
  
    shipit.initConfig({
      default: {
        deployTo: '/static-app/pokedex/',
        repositoryUrl: 'https://github.com/mdesc/pokedex.git',
        key:'./pokedexInstance.pem',
      },
      staging: {
        servers: 'ec2-user@ec2-13-37-216-46.eu-west-3.compute.amazonaws.com',
      },
    })
  }