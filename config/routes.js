var Data = require('./../app/controllers/data');
var User = require('./../app/controllers/user');


/* GET home page. */
module.exports = function (app) {
    app.get('/', User.signinRequired,Data.index);

    app.get('/login', Data.login);

    app.get('/tuijian',User.signinRequired, Data.tuijian);

    app.get('/edit',User.signinRequired, Data.edit);

    app.post('/write',Data.write);
    app.post('/verify', User.verify);
}
