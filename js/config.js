/**
 * Micro 配置
 */


//常量配置
Micro.constant("VERSION",{
    vs : "100"
});

Micro.constant("SERVER", {
    url : {
        uc  : "",
        message : "",
        push : "",
        sop  : ""
    },
    //测试
    testUrl : {
//        uc  : "http://10.10.68.11:8080/uc",
        uc  : "http://10.10.68.11:10000/uc",
        //uc  : "http://10.10.68.11:10000/uc",
//          uc  : "http://172.16.130.172:8088",
          message : "http://10.10.68.11:10000/message",
//          message : "http://10.10.68.12:8080/message",
            "ucm"  : "http://10.10.68.16:8081/ucm",
            //线上
            push : "http://10.10.68.13:8080/notify",
            im   : "ws://10.10.68.13:8080/notify/customerIM",
            sop  : "http://121.41.61.218:9003",
//            mBridge : "http://172.16.130.99:8083/mBridge",
        mBridge : "http://10.10.68.16:8082/mBridge",
        credit : "http://10.10.68.11:8080/credit",
        file : "http://10.10.68.11:10000/file"
    },
    //预发布
    formalUrl : {
        "ucm"  : "http://121.41.78.49:8080/ucm",
        uc  : "http://imzhiliao.com:10000/uc",
        message : "http://imzhiliao.com:10000/message",
        push : "http://121.41.61.218:8080/notify",
        im   : "ws://121.41.61.218:8080/notify/customerIM",
        sop  : "http://121.41.61.218:9003",
        mBridge : "http://10.10.68.16:8082/mBridge",
        credit : "http://imzhiliao.com:10000/credit",
        file : "http://imzhiliao.com:10000/file"
    }
});

//配置http 拦截器
Micro.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});



//启动项
Micro.run(function($rootScope,VERSION){
    $rootScope.VERSION = VERSION;
});
