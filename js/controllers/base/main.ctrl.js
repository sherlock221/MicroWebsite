/**
 * 图文混排详情
 */

Micro.controller('MainCtrl', function($scope,$rootScope,$location,$state,SERVER,Util,cfpLoadingBar) {
    $rootScope.showHeader =  true;

    SERVER.url  = SERVER.testUrl;

    //获得url参数


    var paramsUrl;
    if ($location.$$absUrl.indexOf("#") == -1) {
        paramsUrl = $location.$$absUrl.substring($location.$$absUrl.indexOf("?") + 1, $location.$$absUrl.length);

    }
    else {
        paramsUrl = $location.$$absUrl.substring($location.$$absUrl.indexOf("?") + 1, $location.$$absUrl.indexOf("#"));
    }

    paramsUrl = Util.parseParams(paramsUrl);
    var validId = Util.getParam("validId", paramsUrl);
    Util.setLg("validId",validId);


    $rootScope.goMenu = function(menu){
        var st = Util.toURlState(menu.menuUrl);
        $state.go(st,{
            menuId : menu.id
        });
    }




    //$scope.$on('$stateChangeStart',
    //    function(event, toState, toParams, fromState, fromParams){
    //        cfpLoadingBar.start();
    //        console.log("start...");
    //    })
    //
    //
    //$scope.$on('$stateChangeSuccess',
    //    function(event, toState, toParams, fromState, fromParams){
    //        cfpLoadingBar.complete();
    //        console.log("success...");
    //    })
    //
    //$scope.$on('$stateChangeError',
    //    function(event, toState, toParams, fromState, fromParams){
    //        cfpLoadingBar.complete();
    //        console.log("error...");
    //    })
    //
    //$scope.$on('$stateNotFound',
    //    function(event, toState, toParams, fromState, fromParams){
    //        cfpLoadingBar.complete();
    //        console.log("not found...");
    //    })


});