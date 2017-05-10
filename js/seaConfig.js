/**
 * Created by zuocheng.peng on 2017/4/27.
 */

seajs.config({
    paths: {

    },
    alias: {
        'jquery':'../lib/jquery/jquery.min.js',
        'angular':'../lib/angular/angular.min.js',
        'ui-router':'../lib/angular/angular-ui-router.min2.js',
        'oclazyload':'../lib/oclazyload/oclazyload2.js',
        'ui-bootstrap':'../lib/ui-bootstrap/ui-bootstrap-tpls2.js'
    },
    preload:['jquery','angular','ui-router']
});
seajs.use('./js/app');
/*
seajs.use('./js/loginCtrl');*/
