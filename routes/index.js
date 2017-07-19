var App = require('./../app/controllers/app');


/* GET home page. */
module.exports = function (app) {

    app.get('/', App.signature);
}
// module.exports = router;
