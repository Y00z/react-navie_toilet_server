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
    console.log(req.body)

    return res.send({
        success: true,
        msg: "厕所服务11"
    })
}