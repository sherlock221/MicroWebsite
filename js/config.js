/**
 * Micro 配置
 */


//常量配置
Micro.constant("VERSION",{
    vs : "101"
});

Micro.constant("SERVER", {
    url : {
        file : "",
        mp  : "",
        micro : ""
    },
    //测试
    testUrl : {
        mp  : "http://113.140.31.190:11080",
        //文件上传
        file : "http://10.10.68.11:10000/file",
        //微官网地址
        //micro : "http://imzhiliao.com/node-sev/MicroWebsite/start.html"
        micro : "http://10.10.68.11/MicroWebsite/start.html?validId=1"
    },

    //预发布
    formalUrl : {
        mp  : "http://emap.imzhiliao.com:9000/emap",
        file : "http://10.10.68.11:10000/file",
        //微官网地址
        micro : "http://imzhiliao.com/node-sev/MicroWebsite/start.html"
    }
});

//配置http 拦截器
Micro.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});


Micro.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}])

//启动项
Micro.run(function($rootScope,VERSION){
    $rootScope.VERSION = VERSION;
});
