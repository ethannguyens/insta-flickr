import sauceCredentials from './sauce-credentials';

const sauceConnectLauncher = require('sauce-connect-launcher');

const SauceConnect = function () {
  sauceConnectLauncher({
                         username: sauceCredentials.username,
                         accessKey: sauceCredentials.key,
                         verbose: false,
                         logger: console.log
                       }, function (err, sauceConnectProcess) {
    console.log("Started Sauce Connect Process");
  });
};

module.export = SauceConnect();