theGreenFox.controller('mainController',
	['$scope', 'commandsService', '$location', '$anchorScroll', '$filter', '$window', '$state',
	function($scope, commandsService, $location, $anchorScroll, $filter, $window, $state){

	$scope.welcome = {
		message: "Welcome! \n\nType '--help' to see available commands. \n\nIf you are not familiar with command line you can swith to"
	}

	$scope.helpCommands = commandsService.help();
	$scope.commands = commandsService.commands();
	$scope.links = commandsService.links();
	$scope.commandEntered = {};
	$scope.dateTime = "";
	$scope.message = {};
	$scope.hideOriginalInput = false;
	
	$scope.handleCommand = function () {
		
		if ($scope.commandEntered.input) {
			getDateTime();
			var command = $scope.commandEntered.input

			if (command === '--help' || command === 'fox' ) {
				seekHelp();
				return;
			}

			if (command.substring(0,command.indexOf(' ')) == 'fox') {
				var secondCommand = command.substring(command.indexOf(' ')).substring(1);

				if (checkCommand(secondCommand)) {
					switch(secondCommand){
						// stackoverflow', 'github', 'linkedin', 'twitter', 'facebook', 'contact
						case 'stackoverflow': printCommand(); $window.open($scope.links.stackoverflow, '_blank'); break;
						case 'github': printCommand(); $window.open($scope.links.github, '_blank'); break;
						case 'stackoverflow': printCommand(); $window.open($scope.links.stackoverflow, '_blank'); break;
						case 'linkedin': printCommand(); $window.open($scope.links.linkedin, '_blank'); break;
						case 'twitter': printCommand(); $window.open($scope.links.twitter, '_blank'); break;
						case 'facebook': printCommand(); $window.open($scope.links.facebook, '_blank'); break;
						case 'contact': printCommand(); performContact(); break;
					}
					return;
				}else{
					printCommand();
					printError('fox "'+secondCommand+'" Command not found, type --help to see list of commands.');
					return;
				}
			}

			if (command.substring(0,command.indexOf(' ')) == 'cd') {
				console.log('cd');
			}

			printCommand();
		}
		$scope.gotoBottom();
	}

	$scope.prettyMode = function(){
		$scope.commandEntered.input = "Pretty mode not yet available.";
		$scope.handleCommand();
	}

	$scope.gotoBottom = function() {
    	// $location.hash('bottom');
      	$anchorScroll('bottom');
    };

    function getDateTime() {
    	$scope.dateTime = Date.now();
    }

    function checkCommand(arg) {
    	var index = $scope.commands.indexOf(arg);
    	
	    return (index > -1) ? true : false;
    }

    function performContact() {
    	$state.go('contact');
    }

    // Print functions
    function seekHelp() {
    	$('#directory-here').append(`
		<b class="color-green">guest@jofftiquez.com</b>
		<b class="color-green">`+ $filter('date')($scope.dateTime, 'MMM d, y h:mm:ss') +`</b>
		<b class="console-path"> / $</b><span class="entered-command">`+$scope.commandEntered.input+`</span><br>`+
		`<span class="white-text">`+$scope.helpCommands+`</span><br>`);
		$scope.commandEntered = {};
    }

    function printCommand() {
    	$('#directory-here').append(`
		<b class="color-green">guest@jofftiquez.com</b>
		<b class="color-green">`+ $filter('date')($scope.dateTime, 'MMM d, y h:mm:ss') +`</b>
		<b class="console-path"> / $</b><span class="entered-command">`+$scope.commandEntered.input+`</span><br>`);
		$scope.commandEntered = {};
    }

    function printError(arg) {
    	$('#directory-here').append(`
		<b class="color-green">guest@jofftiquez.com</b>
		<b class="color-green">`+ $filter('date')($scope.dateTime, 'MMM d, y h:mm:ss') +`</b>
		<b class="console-path"> / $</b><span class="error-text">`+arg+`</span><br>`);
		$scope.commandEntered = {};
    }

    getDateTime();
}])
