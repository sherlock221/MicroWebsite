'use strict';


/**
 * 配置路由
 * @sherlock221b
 */
Micro.config(
      function ($stateProvider,   $urlRouterProvider,VERSION) {

          $stateProvider

              .state('app', {
                  url: '/app',
                  abstract : true,
                  templateUrl: 'tpl/app.html?v='+VERSION.vs
              })

              //默认皮肤
              .state('app.s1', {
                  url: '/s1',
                  templateUrl: 'tpl/skin/skin-one.html?v='+VERSION.vs
               })


              //首页
              .state('app.s1.index',{
                  url: '/index',
                  templateUrl: 'tpl/index/index.html?v='+VERSION.vs,
                  controller : "IndexCtrl",
                  data : { pageTitle: 'Index' }

              })

              //list
              .state('app.s1.list',{
                  url: '/list',
                  abstract : true
              })

              //文字列表
              .state('app.s1.list.text',{
                  url: '/text/:menuId',
                  views: {
                      "@app.s1": {
                          templateUrl: 'tpl/list/list-text.html?v='+VERSION.vs,
                          controller : "ListTextCtrl"
                      }
                  },
                  data : { pageTitle: '列表' }

              })

              .state('app.s1.list.image',{
                  url: '/image/:menuId',
                  views: {
                      "@app.s1": {
                          templateUrl: 'tpl/list/list-image.html?v='+VERSION.vs,
                          controller : "ListImageCtrl"
                      }
                  }

              })

              .state('app.s1.list.card',{
                  url: '/card/:menuId',
                  views: {
                      "@app.s1": {
                          templateUrl: 'tpl/list/list-card.html?v='+VERSION.vs,
                          controller : "ListCardCtrl"
                      }
                  }
              })

              //menu
              .state('app.s1.menu',{
                  url: '/menu',
                  abstract : true
              })


              //图标 menu
              .state('app.s1.menu.icon',{
                  url: '/icon/:menuId',
                  views: {
                      "@app.s1": {
                          controller : "MenuIconCtrl",
                          templateUrl: 'tpl/menu/menu-icon.html?v='+VERSION.vs
                      }
                  }

              })
              //自定义 menu
              .state('app.s1.menu.custom',{
                  url: '/icon/:menuId',
                  templateUrl: 'tpl/menu/menu-custom.html?v='+VERSION.vs,
                  controller : "MenuCustomCtrl"
              })


              //detai 图文混排
              .state('app.detail',{
                  url: '/detail',
                  abstract: true
              })


              .state('app.detail.imgText',{
                  url: '/imgText/:menuId',
                  views : {
                      "@app" : {
                          templateUrl: 'tpl/detail/detail-imgText.html?v='+VERSION.vs,
                          controller : "DetailImgTextCtrl"
                      }
                  }
              })

              //第三方
              .state('app.contact',{
                  url: '/contact/:menuId',
                  views : {
                      "@app" : {
                          templateUrl: 'tpl/third/contact.html?v='+VERSION.vs,
                          controller : "ConcatCtrl"
                      }
                  }
              })



          //index
          $urlRouterProvider.otherwise('/app/s1/index');

      }
  );


