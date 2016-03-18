require.config({
    //baseUrl: '/',
    paths: {
        'angular': '../tool/angular/angular-1.5',
        //'angular-ui-router': '../tool/angular/angular-ui-router.min',
        'angular-async-loader': '../tool/angular/angular-async-loader'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']}
    }
});

require(['angular', './app-routes'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});
