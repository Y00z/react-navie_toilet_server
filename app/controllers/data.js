/**
 * Created by Yooz on 2017/7/19.
 */
var Data = require('./../models/data')

exports.index = function (req, res) {
    res.render('index', {});
}

exports.login = function (req, res) {
    res.render('login', {});
}


exports.tuijian = function (req, res) {
    res.render('tuijian', {});
}

exports.read = function (req, res) {
    var type = req.query.type;
    Data.findByType(type, function (err, datas) {
        if (err) console.log(err)
        var data = JSON.stringify(datas)
        return res.send(data);
        // return res.json({
        //     success: true,
        //     data: data
        // })
    })
}

exports.edit = function (req, res) {
    var type = req.query.type;
    console.log(type)
    if (type) {
        Data.findByType(type, function (err, datas) {
            if (err) console.log(err)
            return res.render('edit', {
                data: datas
            });
        })
    } else {
        return res.send({
            success: false,
            info: '参数错误'
        });
    }
}

exports.write = function (req, res) {
    var id = req.body._id
    //提交过来的对象
    var dataObj = req.body
    //要存入的对象
    var _data
    if (id) {
        Data.findByid(id, function (err, _data) {
            if (err) console.log(err)
            //提交上来的数据，替换掉数据库已经存在的数据。  (新的替换掉旧的)
            _data = _.extend(_data, dataObj) //第一个旧的，第二个新的。
            _data.save(function (err, data) {
                if (err) console.log(err)
                var result = JSON.stringify(data);
                return res.send({
                    success: true,
                    data: result
                })
            })
        })
    } else {
        _data = new Data(dataObj)
        _data.save(function (err, data) {
            if (err) console.log(err)
            var result = JSON.stringify(data);
            return res.send({
                success: true,
                data: result
            })
        })
    }
}