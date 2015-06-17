/**
 * 联系我们 菜单
 */

Micro.controller('ConcatCtrl', function($scope,$rootScope,$stateParams,MicroSev) {

    $scope.concat;

    console.log("concat..");

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    //查询菜单列表
    var load = function(){

        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.concat = res.bizData;
        });
    }

    //查询
    load();




});