/**
 * Text 文字列表
 */

Micro.controller('ListTextCtrl', function($scope,$state,$stateParams,$rootScope,Util,MicroSev) {
    console.log("list > text ...");

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    $scope.textList =  [];

    var loadSub = function(menuId){
        //查询子菜单
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.textList  = res.bizData;
        });
    }

    //前往详情
    $scope.goDetail = function(detail){
        Util.setLgObj("detail",detail);
        $state.go("app.detail.imgText");
    }

    loadSub(menuId);

});