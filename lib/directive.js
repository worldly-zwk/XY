/**
 * Created by ZHANGWK on 2017/4/10.
 */
angular.module("myApp")
    .directive("swiperDirective",function(){
        return {
            restrict:"AE",
            replace:true,
            template:'<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide" ng-repeat="item in data" ui-sref="public.theSun_barnd"><img src="{{item.img}}"></div></div><div class="swiper-pagination"></div></div>',
            scope:{
                data:"="
            },
            link:function(scope,ele,attrs){
                var time=scope.auto;
                setTimeout(function(){
                    new Swiper(ele,{
                        loop:true,
                        autoplay:2000,
                        autoplayDisableOnInteraction:false,
                        pagination:".swiper-pagination"
                    })
                },0)
            }
        }
    })
    .directive("goodsDirective",["$timeout",function(timeout){
        return {
            restrict:"AE",
            replace:true,
            template:'<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide" ng-repeat="item in data"><div ng-class="[\'tag tag-right\',\'tag\'][tags.direction]" ng-if="item.list.length" ng-repeat="tags in item.list" style="top: {{tags.y*100+\'%\'}};left: {{tags.x*100+\'%\'}}" ng-click="fnType(tags)"><div class="circular"><div></div><div></div></div><span>{{tags.tag}}</span></div><img src="{{item.img}}" ui-sref="public.theSun_details"></div></div><div class="swiper-pagination"></div></div>',
            scope:{
                data:"="
            },
            link:function(scope,ele,attrs){
                timeout(function(){
                    new Swiper(ele,{
                        resistanceRatio:0,
                        pagination:".swiper-pagination"
                    })
                },0)

                scope.fnType=function(item){
                    console.log(item)
                    if(item.type==1){

                    }else if(item.type==2){

                    }else{

                    }
                }
            }
        }

    }])
    .directive("usersDirective",function(){
        return {
            restrict:"AE",
            template:'<div class="users"><dl ng-repeat="item in data" ui-sref="public.user"><dt><img ng-src="{{item.user_head}}"></dt><dd><p class="userName">{{item.user_name}}</p><p class="explain"><span>item.num</span>晒物</p></dd></dl></div>',
            scope:{
                data:"="
            },
            link:function(scope,ele,attrs){
                setTimeout(function(){
                    new IScroll(ele[0],{

                    })
                },0)
            }
        }
    })
    .directive("listDirective",function(){
        return {
            restrict:"AE",
            replace:true,
            template:'<div class="list-item"><div class="list-user"><dl ui-sref="public.user"><dt><img ng-src="{{data.user_head}}" alt=""></dt><dd><p>{{data.user_name}}</p><time>{{data.ctime}}</time></dd></dl><p class="btn" ng-click="fn(data)">{{follow}}</p></div><p class="list-title">{{data.topic_name}}</p><p class="list-describe">{{data.msg_content}}</p><div goods-directive data="data.images"></div><div class="list-product" ng-show="{{data.goods_list.length}}"><dl ng-repeat="item in data.goods_list"><dt><img ng-src="{{item.goods_img}}"></dt><dd><p class="list-product-title">{{item.goods_name}}</p><p class="list-product-price">{{item.goods_price | currency :"￥"}}</p></dd></dl></div><div class="list-option"><i class="icon iconfont icon-zan size"><span>{{data.zan_cnt}}</span></i><i class="icon iconfont icon-iconfontliaotian size"><span>{{data.comment_cnt}}</span></i><i class="icon iconfont icon-fenxiang"></i></div></div>',
            scope:{
                data:"="
            },
            link:function(scope,ele,attrs){
                scope.follow=scope.data.is_follow==1?"√关注":"+关注";

                scope.fn=function(data){
                    data.is_follow=data.is_follow==1?0:1;
                    scope.follow=data.is_follow==1?"√关注":"+关注";
                }
            }
        }
    })