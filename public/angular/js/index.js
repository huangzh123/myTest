/**
 * Created by gohero on 2016/3/18.
 */
var app = angular.module('myApp', []);
//指令
app.directive("alert",function(){
    return {
        name:"alert",
        restrict:"E",
        //scope:{
        //    username:"#"
        //},
        //compile:function(element,attributes){
        //    //element.addClass('ng-alert');
        //    attributes.username=111;
        //    if(attributes.username){
        //        element.addClass("alert-"+attributes.username)
        //    }
        //},
        template:"提示框"
    }
});

//service服务
app.service("myservice",function(){
    this.myfun=function(name){
        return "Hello "+name+"!";
    }
})
//过滤器
app.filter("myfilter",["myservice",function(myservice){
    return function(x){
        return myservice.myfun(x)+",Luck!";
    }
}])
//控制器
app.controller('testController', function($scope) {
    $scope.arr=[{name:"ming",age:20},{name:"hong",age:23},{name:"wang",age:22}];
    $scope.arr2={
        "person1":"ming",
        "person2":"hong",
        "perosn3":"wang"
    }
});
app.controller("testServer",function($scope,$location,myservice){
    //$scope.localurl=$location.absUrl();
    $scope.localurl=myservice.myfun("ming");
    $scope.ishide=false;
    $scope.hide=function(){
        $scope.ishide=!$scope.ishide;
    }
});
//指令
app.directive("testDirective",function(){//注意驼峰
    return {
        template:"我的第一条指令！"
    }
});
app.controller("testCopier",function($scope){
    $scope.temp="小明";
    $scope.reset=function(){
        $scope.username=angular.copy($scope.temp);
    }
    $scope.clear=function(){
        $scope.username="";
    }
    $scope.reset();
});
app.controller("testForm",function($scope,$compile){
    $scope.username="ming@163.com";
    //$scope.userName='Welcome to Angular World!';
    //$scope.test = function(){
    //    console.log('Angular 动态添加元素');
    //}

//通过$compile动态编译html
//        var html="<div ng-click='test()'>测试</div>";
//        var template = angular.element(html);
//        var mobileDialogElement = $compile(template)($scope);
//        angular.element(document.body).append(mobileDialogElement);

// remove移除创建的元素
//        var closeMobileDialog = function () {
//            if (mobileDialogElement) {
//                mobileDialogElement.remove();
//            }
//        }
});


