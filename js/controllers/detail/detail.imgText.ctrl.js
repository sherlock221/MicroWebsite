/**
 * 图文混排详情
 */

Micro.controller('DetailImgTextCtrl', function($scope,$rootScope,$stateParams,Util,MicroSev) {

    console.log("detail > imgText ");

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);


    $scope.detail;

    
    var loadSub = function(menuId){
        //查询子菜单
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.detail  = res.bizData;
        });
    }

    loadSub(menuId);
});