/**
 * Created by ZHANGWK on 2017/4/10.
 */
angular.module("myApp")
    .controller("publicCtrl",["$scope",function(scope){
        scope.flay=true;
    }])
    .controller("theSunCtrl",["$scope","$http","data",function(scope,http,data){
        scope.data=data.data.data;
        scope.$parent.flay=true;

        scope.fn=function(event,str){
            $(event.currentTarget).addClass("active").siblings().removeClass("active");
            if(str=="follow"){
                http.get("./json/follow.json").success(function(data){
                    scope.data=data.data;
                })
            }else{
                http.get("./json/theSun.json").success(function(data){
                    scope.data=data.data;
                })
            }
            $(".comment-section").scrollTop(0);
        }

    }])
    .controller("theSun_barndCtrl",["$scope","data",function(scope,data){
        scope.$parent.flay=false;
        scope.data=data.data.data;
        scope.orderBy="-utime";

        scope.fn=function(event){
            var ele=$(event.currentTarget);
            if(ele.find('span').hasClass("span_down")){
                ele.prev("div").css("-webkit-line-clamp","initial");
            }else{
                ele.prev("div").css("-webkit-line-clamp","");
            }
            ele.find("span").toggleClass("span_down").toggleClass("span_uper");
        };

        scope.order=function(event,str){
            console.log("111")
            $(event.currentTarget).addClass("active").siblings().removeClass("active");
            scope.orderBy="-"+str;
            $(".comment-section").scrollTop(0);
        }
    }])
    .controller("userCtrl",["$scope","$http","data",function(scope,http,data){
        scope.$parent.flay=false;
        scope.data=data.data.data;
        scope.follow=scope.data.user_info.is_follow==1?"√关注":"+关注";
        scope.fn=function(event,str){
            $(event.target).addClass("active").siblings().removeClass("active");
            if(str=="zan"){
                http.get("./json/user_zan.json").success(function(data){
                    scope.data=data.data;
                })
            }else{
                scope.data=data.data.data;
            }
        };

        scope.fnBtn=function(data){
            data.is_follow=data.is_follow==1?0:1;
            scope.follow=data.is_follow==1?"√关注":"+关注";
        }

    }])
    .controller("theSun_detailsCtrl",["$scope","data",function(scope,data){
        scope.$parent.flay=false;
        scope.data=data.data.data;
        scope.follow=scope.data.data.is_follow==1?"√关注":"+关注";
        $("#share-alert").on("click",function(){
            $(".theSun-details-mark").css("display","block");
            $(".details-mark-box",".theSun-details-mark").animate({"bottom":0},300);
        });

        $(".details-mark-btn",".theSun-details-mark .details-mark-box").on("click",function(){
            $(".details-mark-box",".theSun-details-mark").animate({"bottom":"-16.2rem"},300,function(){
                $(".theSun-details-mark").css("display","none");
            });
        })

        scope.fn=function(data){
            data.is_follow=data.is_follow==1?0:1;
            scope.follow=data.is_follow==1?"√关注":"+关注";
        }
    }])
