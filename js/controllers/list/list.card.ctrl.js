/**
 * 卡片 文字列表
 */

Micro.controller('ListCardCtrl', function($scope,$stateParams,$state,$rootScope,Util,MicroSev) {


    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    $scope.cardList =  [];

    var loadSub = function(menuId){
        //查询子菜单
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.cardList  = res.bizData;
        });
    }



    $scope.goCardDetail = function(card){
            Util.setLgObj("detail",card);
            $state.go("app.s1.card");
    }

    loadSub(menuId);
});
