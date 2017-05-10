/**
 * Created by zuocheng.peng on 2017/4/26.
 */

define(function (require,exports,module) {
    if (typeof define === "function" && (define.amd || define.cmd)) {
        define("angular", [], function () {
            return angular;
        });
    }
    require('jquery');
    require('angular');
    require('ui-router');
    require('oclazyload');
    var myApp = angular.module('myApp',['ui.router','oc.lazyLoad']);
    myApp.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when("","/login");
        $urlRouterProvider.otherwise('/login');
        $stateProvider.state("login",{
            url:"/login",
            views:{
                "": {
                    templateUrl:"login.html",
                    controller:"HomeLoginController"
                }
            },resolve: {
                    loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/loginCtrl2.js'
                        ]);
                    }]
            }
        })

        $stateProvider.state("page_home",{
            url:"/page_home",
            templateUrl:"page_home.html"
        })
        $stateProvider.state("page_home.Page1",{
            url:"/page_1",
            templateUrl:"page_1.html"
        })
        $stateProvider.state("page_home.Page2",{
            url:"/page_2",
            templateUrl:"page_2.html"
        })
        $stateProvider.state("page_home.Page3",{
            url:"/page_3",
            templateUrl:"page_3.html"
        });

    });
   /* myApp.controller("HomeLoginController",HomeLoginController);

    function HomeLoginController($scope,$timeout) {
        $scope.alerts = [];


        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
        $scope.submit = function () {
            if ($scope.frmLogin.txtName.$invalid)
                addAlert({ type: 'danger', msg: '用户名不能为空!' });
            if ($scope.frmLogin.txtPwd.$invalid)
                addAlert({ type: 'danger', msg: '密码不能为空!' });

            if ($scope.alerts.length)
                return;

            addAlert({ type: 'success', msg: '登录成功' });
        };

        function addAlert(alert) {
            $scope.alerts.push(alert);
            $timeout(function () {
                angular.forEach($scope.alerts, function (a, i) {
                    if (alert != a)
                        return;
                    $scope.alerts.splice(i, 1);
                });
            }, 500);
        };
    };*/
    angular.element(document).ready(
        function () {
            angular.bootstrap(document.getElementById('myApp'),['myApp']);

        }
    );
})
