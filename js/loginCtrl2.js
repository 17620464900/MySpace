/**
 * Created by zuocheng.peng on 2017/5/2.
 */
angular.module('login',[])
.controller("HomeLoginController",HomeLoginController);
function HomeLoginController($scope,$timeout,$location) {
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
        if ($scope.frmLogin.txtName.$invalid)
            alert($scope.frmLogin.txtName)
            addAlert({ type: 'danger', msg: '用户名不能为空!' });
        if ($scope.frmLogin.txtPwd.$invalid)
            addAlert({ type: 'danger', msg: '密码不能为空!' });

        if ($scope.alerts.length)
            return;

        addAlert({ type: 'success', msg: '登录成功' });
        $location.path("/page_home");
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