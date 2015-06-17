/**
 * Menu 菜单
 */

Micro.controller('MenuCustomCtrl', function($scope,$stateParams,$rootScope) {


    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    //查询菜单列表
    var load = function(){

        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.menuList = res.bizData;
        });

    }

    //查询
    load();
});