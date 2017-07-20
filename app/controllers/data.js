/**
 * Created by Yooz on 2017/7/19.
 */
var Data = require('./../models/data')

exports.index = function (req, res) {
    return res.send({
        success: true,
        msg: "厕所服务"
    })
}


exports.write = function (req, res) {
    var id = req.body._id
    //提交过来的对象
    var dataObj = req.body
    //要存入的对象
    var _data
    if (id) {
        console.log("已经有了")
        Data.findByid(id, function (err, _data) {
            if (err) console.log(err)
            //提交上来的数据，替换掉数据库已经存在的数据。  (新的替换掉旧的)
            _data = _.extend(_data, dataObj) //第一个旧的，第二个新的。
            _data.save(function (err, data) {
                if (err) console.log(err)
                var result = JSON.stringify(data);
                return res.send({
                    success: true,
                    msg: "厕所服务11",
                    data: result
                })
            })
        })
    } else {
        console.log("新的")
        _data = new Data(dataObj)
        _data.save(function (err, data) {
            if (err) console.log(err)
            var result = JSON.stringify(data);
            return res.send({
                success: true,
                msg: "厕所服务11",
                data: result
            })
        })
    }

}