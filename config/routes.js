var Data = require('./../app/controllers/data');


/* GET home page. */
module.exports = function (app) {
    app.get('/', Data.index);

    app.post('/write', Data.write);

}
