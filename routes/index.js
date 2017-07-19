var Data = require('./../app/controllers/data');


/* GET home page. */
module.exports = function (app) {
    app.get('/', Data.index);
}
// module.exports = router;
