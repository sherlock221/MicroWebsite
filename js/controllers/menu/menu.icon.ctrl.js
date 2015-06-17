/**
 * Menu 菜单
 */

Micro.controller('MenuIconCtrl', function($scope,$rootScope,$stateParams,Util,MicroSev) {

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);


    $scope.menuList =  [];

    //查询菜单列表
    var load = function(){

        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.menuList = res.bizData;
        });

    }

    //查询
    load();


});