/**
 * @sherlock221b
 */
Micro
    .factory("MicroSev", function ($q,$http,SERVER) {

        var MicroSev = {

            //获得菜单列表
            getMicroList : function(){
                var data = {
                    "style": "",
                    "data": {},
                    "clientInfo": {}
                };
                var defer = $q.defer();
                $http.post(SERVER.url.mp+"/public/osMenu/queryMenuList",data)
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return defer.promise;
            },

            //获得子菜单
            getSubMicro : function(menuId){
                var data = {
                    "style": "",
                    "data": {
                        menuId : menuId
                    },
                    "clientInfo": {}
                };
                var defer = $q.defer();
                $http.post(SERVER.url.mp+"/public/osMenu/querySubListByMenu",data
                )
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){
                    defer.reject(err);
                });

                return defer.promise;
            },

            //更新menu
            updateArticle : function(sub){
                var data = {
                    "style": "",
                    "data": {
                        menuId : sub.menuId,
                        infoData : sub
                    },
                    "clientInfo": {}
                };
                var defer = $q.defer();
                $http.post(SERVER.url.mp+"/article/updateArticle",data
                )
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });

                return defer.promise;
            },

            getEmapNameByValidId : function(validId){
                var data = {
                    "style": "",
                    "data": {
                        validId :validId
                    },
                    "clientInfo": {}
                };
                var defer = $q.defer();
                $http.post(SERVER.url.mp+"/public/osMenu/getEmapNameByValidId ",data
                )
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });

                return defer.promise;
            }

        }



        return MicroSev;
    });


