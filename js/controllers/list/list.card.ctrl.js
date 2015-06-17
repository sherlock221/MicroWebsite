/**
 * 卡片 文字列表
 */

Micro.controller('ListCardCtrl', function($scope,$stateParams,$rootScope,Util,MicroSev) {
    console.log("list > card >...");


    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    $scope.cardList =  [];

    var loadSub = function(menuId){
        //查询子菜单
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.cardList  = res.bizData;
        });
    }

    loadSub(menuId);
});
