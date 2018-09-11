// Hold methods for fetching cfg values

const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
        // mongodb://<dbuser>:<dbpassword>@ds251622.mlab.com:51622/nodetodo
        return 'mongodb://' + configValues.username + ':' + configValues.pwd + '@ds251622.mlab.com:51622/nodetodo';
    }
};