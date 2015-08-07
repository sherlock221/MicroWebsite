/**
 * 联系我们 菜单
 */

Micro.controller('ConcatCtrl', function($scope,$rootScope,$stateParams,MicroSev,VERSION) {

    $scope.concat = "";

    var menuId = $stateParams.menuId;
    console.log($stateParams.menuId);

    var allmap=document.getElementById('allmap');


    //查询菜单列表
    var load = function(){
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.concat = res.bizData;
            //if(!$scope.concat.latitude){
            //    alert("地址信息格式不对!");
            //    return;
            //}
            //showMap($scope.concat.latitude,$scope.concat.longitude);
        });
    }


    //显示地图
    var showMap=function(latitude,longitude) {
        var mapPointX = latitude;
        var mapPointY = longitude;

        if (mapPointX && mapPointY) {
            console.log(mapPointX);
            var map = new BMap.Map(allmap);            // 创建Map实例
            //var point = new BMap.Map(mapPoint.x,mapPoint.y)
            var point = new BMap.Point(mapPointY, mapPointX); // 创建点坐标
            map.centerAndZoom(point, 15);                 // 初始化地图,设置中心点坐标和地图级别。
            map.addControl(new BMap.ZoomControl());      //添加地图缩放控件
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
        }
    }
    //查询
    load();

});