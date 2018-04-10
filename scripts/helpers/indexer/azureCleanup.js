
var rp = require('request-promise');

//cleaned for now to make sure the build is working.
module.exports = function index(done) {

    if (!process.env.AZURE_API_KEY) {
        console.log('Skipping azure index cleaning');
        return done();
    }


    done();

};

function getAzureIndex() {

}