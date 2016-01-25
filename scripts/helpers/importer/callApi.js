var r = require('request');

module.exports = function(url, cb){
    //console.log('call : ', url);
    r(url, function(err, res, body){
        cb(err, JSON.parse(body));
    });
};