dagstaatjeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/splash.html',
            controller: 'splashController'
        })
        .when('/count', {
            templateUrl: 'templates/count.html',
            controller: 'countController'
        })
        .when('/input', {
            templateUrl: 'templates/input.html',
            controller: 'inputController'
        });
});

