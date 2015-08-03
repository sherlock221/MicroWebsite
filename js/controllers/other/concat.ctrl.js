/**
 * 联系我们 菜单
 */

Micro.controller('ConcatCtrl', function($scope,$rootScope,$stateParams,MicroSev,VERSION) {

    $scope.concat;
    var ak=VERSION.ak;

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
    //显示地图
    var showMap=function(){
        MicroSev.getSubMicro(menuId).then(function(res){
            $scope.concat = res.bizData;
            var mapPointX=$scope.concat.latitude;
            var mapPointY=$scope.concat.longitude;
            if(mapPointX && mapPointY){
                console.log(mapPointX);
                var allmap=document.getElementById('allmap');
                var map = new BMap.Map(allmap);            // 创建Map实例
                //var point = new BMap.Map(mapPoint.x,mapPoint.y)
                var point = new BMap.Point(mapPointY, mapPointX); // 创建点坐标
                map.centerAndZoom(point,15);                 // 初始化地图,设置中心点坐标和地图级别。
                map.addControl(new BMap.ZoomControl());      //添加地图缩放控件
                var marker = new BMap.Marker(point);
                map.addOverlay(marker);
            }else{
                return;
            }
        });
    }


    showMap();



});