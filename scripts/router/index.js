var logger = require('../../config/logger');
var util = require('util');

//Require all routes and define general routes
/**
 * Fill the express app up with the routes
 * Be careful, the order is important !
 */
module.exports = function (app) {
    app.use('/classes', require('./routes/classes'));
    app.use('/tutorials', require('./routes/tutorials'));
    app.use('/extensions', require('./routes/extensions'));
    app.use('/exporters', require('./routes/exporters'));
    app.use('/overviews', require('./routes/overviews'));
    app.use('/generals', require('./routes/generals'));
    app.use('/page.php', require('./routes/forward'));
    app.use('/search', require('./routes/search'));
    app.use('/playground', require('./routes/playground'));


    app.use(require('./routes/root'));

    // ERRORS

    // Handle 404
    app.use(function (error, req) {
        logger.error('404 Error - ', error.path);
        req.status(404);
        req.render('errorpages/404.pug', {});
    });

    // Handle 500
    app.use(function (error, req, res, next) {
        logger.error('500 Error at ' + error.path + ' - ' + util.inspect(error, {showHidden: false, colors: true}));
        res.status(500);
        res.render('errorpages/500.pug', {});
    });

};

