/**
 * Created by ZHANGWK on 2017/4/10.
 */
angular.module("myApp")
    .config(["$urlRouterProvider","$stateProvider",function(urlRouterProvider,stateProvider){
        //urlRouterProvider.otherwise("/default");
        urlRouterProvider.otherwise("/public/theSun");
        stateProvider
            .state("default",{
                url:"/default",
                templateUrl:"./tpl/default.html"
            })
            .state("public",{
                url:"/public",
                templateUrl:"./tpl/public.html",
                controller:"publicCtrl"
            })
            .state("public.home",{
                url:"/home",
                templateUrl:"./tpl/home.html",
                controller:["$scope",function(){

                }]
            })
            .state("public.theSun",{
                url:"/theSun",
                resolve:{
                    data:["$http",function(http){
                        return http.get("./json/theSun.json");
                    }]
                },
                templateUrl:"./tpl/theSun.html",
                controller:"theSunCtrl"
            })
            .state("public.theSun_barnd",{
                url:"/theSun_barnd",
                templateUrl:"./tpl/theSun_barnd.html",
                resolve:{
                    data:["$http",function(http){
                        return http.get("./json/theSun_barnd.json")
                    }]
                },
                controller:"theSun_barndCtrl"
            })
            .state("public.user",{
                url:"/user",
                templateUrl:"./tpl/user.html",
                resolve:{
                    data:["$http",function(http){
                        return http.get("./json/theSun_user.json");
                    }]
                },
                controller:"userCtrl"
            })
            .state("public.theSun_details",{
                url:"/theSun_details",
                templateUrl:"./tpl/theSun_details.html",
                resolve:{
                    data:["$http",function(http){
                        return http.get("./json/theSun_details.json")
                    }]
                },
                controller:"theSun_detailsCtrl"
            })

    }])