var theGreenFox = angular.module('theGreenFox', [
    'ui.router',
])
.config(['$stateProvider', '$locationProvider',
function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('landing-page', {
            url: '/',
            templateUrl: 'modules/main/main.html',
            controller: 'mainController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'modules/contact/contact.html',
            controller: 'contactController'
        })
        .state('about', {
            templateUrl: 'modules/main/about.html',
            controller: 'aboutController'
        })

    // $locationProvider.html5Mode(true);

    // $.material.init();
}])

.factory('focus', function($timeout, $window) {
    return function(id) {
        // timeout makes sure that is invoked after any other event has been triggered.
        // e.g. click events that need to run before the focus or
        // inputs elements that are in a disabled state but are enabled when those events
        // are triggered.
        $timeout(function() {
            var element = $window.document.getElementById(id);
            if(element)
            element.focus();
        });
    };
})

.controller('focusController', function($scope, focus) {
    focus('input');
    $scope.focusForever = function() {
        // do something awesome
        focus('input');
    };
});
