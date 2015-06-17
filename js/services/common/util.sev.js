Micro
    .factory("Util", function ($window) {
        var Util = {
            uuid : function() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        },


            isEmptyObject : function(model){
                if (typeof model.rows === "object" && !(model.rows instanceof Array)){
                    var hasProp = false;
                    for (var prop in model.rows){
                        hasProp = true;
                        break;
                    }
                    if (hasProp){
                        model.rows = [model.rows];
                    }else{
                        throw "model.rows is empty object";
                        return false;
                    }
                }
            },
            caclTotal : function($scope){
                var size   = parseInt($scope.pageSize);
                var total  = parseInt($scope.pageTotal);
                var  currentPage;
                if( total %  size   == 0){
                    currentPage = total / size;
                }
                else{
                    currentPage  = parseInt(total / size) + 1;
                }
                $scope.pageTotal = currentPage;
            },

            calcPage : function($scope,opear){
                var index   = parseInt($scope.pageIndex);
                var total  = parseInt($scope.pageTotal);

                if(opear == "next"){
                    index++;
                    if(index >  total){
                        index = total;
                    }
                }
                else if( opear == "prev"){
                    index--;
                    if(index < 1){
                        index = 1;
                    }
                }
                $scope.pageIndex = index;
            },

            getSgObj: function (key) {
                var obj = $window.sessionStorage.getItem(key);
                return  JSON.parse(obj);
            },
            setSgObj: function (key, value) {
                return $window.sessionStorage.setItem(key, JSON.stringify(value));
            },

            getSg: function (key) {
               return  $window.sessionStorage.getItem(key);
            },

            setSg: function (key, value) {
                $window.sessionStorage.setItem(key, value);
            },
            remove : function(key){
                $window.sessionStorage.removeItem(key);
            },

            getLgObj: function (key) {

                var obj = $window.localStorage.getItem(key);
                if(obj){
                    return  JSON.parse(obj);
                }
                else{
                    return "";
                }
            },
            setLgObj: function (key, value) {
                return $window.localStorage.setItem(key, JSON.stringify(value));
            },
            getLg: function (key) {
                return $window.localStorage.getItem(key);
            },

            setLg: function (key, value) {
                $window.localStorage.setItem(key, value);
            },
            removeLg : function(key){
                $window.localStorage.removeItem(key);
            },

            relpaceAll: function(str, sptr, sptr1){
                while (str.indexOf(sptr) >= 0) {
                    str = str.replace(sptr, sptr1);
                }

                return str;
            },

            parseParams : function(paramsUrl){
                var  paramsArray  = paramsUrl.split("&");
                var  newParams = [];
                for(var i =0; i<paramsArray.length;i++){
                    var objs = paramsArray[i].split("=");
                    var tt = '{"'+objs[0]+'": "'+objs[1]+'" }';
                    var newObj = JSON.parse(tt);
                    newParams.push(newObj);
                }
                return newParams;

            },

            getParam : function(key,array){
                for(var i =0; i<array.length;i++){
                    var objs = array[i];
                    if(objs[key]){
                        return  objs[key];
                    }

                }
                return "";
            },

            toURlState : function(url){
                if(url.indexOf('#') == "-1"){
                    return;
                }
                var temp = url.substring(url.indexOf('#')+2,url.length);
                return this.relpaceAll(temp,"/",".");
            }
        };
        return Util;

    });




//对Array进行扩展
Array.prototype.removeObj=function(obj,key)
{
    for(var i=0;i <this.length;i++){
        var a = this[i];
        if(a[key] == obj[key]){
            this.remove(i);
        }
    }
}
Array.prototype.remove=function(dx)
{

    if(isNaN(dx)||dx>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[dx])
        {
            this[n++]=this[i]
        }
    }
    this.length-=1
}


Array.prototype.unique = function (key) {
    var temp = new Array();
    this.sort();
    for(i = 0; i < this.length; i++) {
        var fb = this[i]
        var sb = this[i+1]

        if(this[i+1]){
            if( fb[key] == sb[key]) {
                continue;
            }
        }
        //console.log("f",fb.id);
        //console.log("s",sb.id);
        temp[temp.length]=this[i];
    }
    return temp;
}


Array.prototype.unshiftArray = function (arrays) {
    for(var i =0; i <arrays.length; i++){
        var ab  = arrays[i];
        this.unshift(ab);
    }
}