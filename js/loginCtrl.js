/**
 * Created by zuocheng.peng on 2017/4/27.
 */

define(function (require,exports,module) {

    require('angular');
    require('ui-bootstrap');
    var myApp= angular.module('login', ['ui.bootstrap']);
    myApp.controller("HomeLoginController",HomeLoginController);

    function HomeLoginController($scope,$timeout) {
        $scope.alerts = [];

        /*    $scope.submit = function () {
         if ($scope.frmLogin.txtName.$invalid)
         $scope.alerts.push({ type: 'danger', msg: '用户名不能为空!' });
         if ($scope.frmLogin.txtPwd.$invalid)
         $scope.alerts.push({ type: 'danger', msg: '密码不能为空!' });

         if ($scope.alerts.length)
         return;

         $scope.alerts = [{ type: 'success', msg: '登录成功' }];

         };*/

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
        $scope.submit = function () {
            alert($scope.frmLogin.txtName)
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
    };
    angular.element(document).ready(
        function () {
            angular.bootstrap(document.getElementById('login'),['login']);

        }
    );
});

