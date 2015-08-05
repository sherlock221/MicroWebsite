/**
 * 图文混排详情
 */

Micro.controller('DetailImgTextCtrl', function($scope,$rootScope,$stateParams,Util,MicroSev) {

    console.log("detail > imgText ");

     $scope.detail;

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);


    var loadSub = function(menuId){
        //查询子菜单
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.detail  = res.bizData;
        });
    }


    if(!menuId){
        var detail = Util.getLgObj("detail");
        console.log(detail.content);
        $scope.detail = detail;
    }
    else{

        loadSub(menuId);

    }










});