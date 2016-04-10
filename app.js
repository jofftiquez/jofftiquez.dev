var theGreenFox = angular.module('theGreenFox', [
	'ui.router',
])
.config(['$stateProvider', '$locationProvider',
	function($stateProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $stateProvider
        .state('landing-page', {
            url: '/',
            templateUrl: 'modules/main/templates/main.html',
            controller: 'mainController'
        })

    // $locationProvider.html5Mode(true);

    // $.material.init();
}])
