/**
 * Text 文字列表
 */

Micro.controller('ListTextCtrl', function($scope,$stateParams,$rootScope,Util,MicroSev) {
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

    loadSub(menuId);

});