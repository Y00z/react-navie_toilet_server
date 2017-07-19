/**
 * Created by Yooz on 2017/7/19.
 */
//模型
var mongoose = require("mongoose");
var DataSchema = require("../schemas/data");
var Data = mongoose.model('Data',DataSchema);


module.exports = Data