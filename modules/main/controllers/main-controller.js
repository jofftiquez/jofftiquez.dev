theGreenFox.controller('mainController',
	['$scope', 'commandsService',
	function($scope, commandsService){

	$scope.welcome = {
		message: "Welcome to jofftiquez.com \n\nType '--help' to see available commands. \n\nIf you are not familiar with command line you can swith to"
	}

	$scope.commandEntered = {};

	$scope.handleCommand = function () {
		$('#directory-here').append(`<b class="color-green">guest@jofftiquez.com</b>
		<b class="console-path"> / $</b><span class="entered-command">`+$scope.commandEntered.input+`</span><br>`);
		$scope.commandEntered = {};
	}

}])
