/**
 * Created by Yooz on 2017/7/20.
 */
//登录验证
exports.verify = function (req, res) {
    var username = req.body.username
    var password = req.body.password
    var user = req.body
    if(username === 'admin' && password ==='123456'){
        req.session.user = user
        res.send({
            success:true
        })
    }else{
        res.send({
            success:false
        })
    }
}

//判断是否登录。
exports.signinRequired = function (req, res,next) {
    var user = req.session.user
    if(!user)
        return res.redirect("/login");
    //如果登录了就跳到下一步，验证权限
    next()
}