// 引入express模块
var express = require("express");
//以express为原型创建变量app
var app = new express();
//运用app对象中的use方法
//引用express中的static方法绑定静态页面
//page文件夹放置静态页面
app.use(express.static("./page/"));
//app监听端口12556并且回调输出服务器已启动
app.listen(12557,function(){
    console.log("服务器已启动")
})

