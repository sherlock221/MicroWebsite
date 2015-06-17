/**
 * 纯图列表 文字列表
 */

Micro.controller('ListImageCtrl', function($scope,$rootScope,$stateParams,Util,MicroSev) {
    console.log("list > image >...");

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    $scope.imgList =  [];

    var loadSub = function(menuId){
        //查询子菜单
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.imgList  = res.bizData;
        });
    }

    loadSub(menuId);
});
