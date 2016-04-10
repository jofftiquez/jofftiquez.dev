theGreenFox.controller('mainController',
	['$scope', 'commandsService',
	function($scope, commandsService){

	$scope.welcome = {
		message: "Welcome to jofftiquez.com \n\nType '--help' to see available commands. \n\nIf you are not familiar with command line you can swith to"
	}

	$scope.handleCommand = function () {

	}
}])
