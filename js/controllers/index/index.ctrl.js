/**
 * 首页
 */

Micro.controller('IndexCtrl', function($scope,$rootScope,$state,Util,MicroSev) {
    console.log("index....");


    $scope.menuList =  [];

    //查询菜单列表
    var load = function(){
        //查询菜单列表
        MicroSev.getMicroList().then(function(res){
            $scope.menuList = res.bizData;
        },function(){
        });
    }

    //查询
    load();





});
