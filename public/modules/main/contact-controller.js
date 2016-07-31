theGreenFox.controller('contactController',
	['$scope', 'commandsService', '$location', '$anchorScroll', '$filter', '$window', '$state', '$http', '$timeout',
	function($scope, commandsService, $location, $anchorScroll, $filter, $window, $state, $http, $timeout){

	$scope.welcome = {
		message: "Type --exit to return"
	}

	$scope.helpCommands = commandsService.help();
	$scope.commands = commandsService.commands();
	$scope.links = commandsService.links();
	$scope.commandEntered = {};
	$scope.message = {};
	$scope.currentCommand = "Enter your email :";
	$scope.hideOriginalInput = false;
	var lastCommand = "Enter your email :";
	var state = 0;
	
	$scope.handleCommand = function () {
		var command = $scope.commandEntered.input;
		if (command) {
			
			// Exit
			if (command === '--exit') { $state.go('landing-page'); return; }

			if (state == 0) {
				$scope.message.from = $scope.commandEntered.input;
				$scope.currentCommand = "Enter subject :";
				lastCommand = "Enter your email :";
			}else if (state == 1) {
				$scope.message.subject = $scope.commandEntered.input;
				$scope.currentCommand = "Enter body :";
				lastCommand = "Enter subject :";
			}else if (state == 2) {
				$scope.message.body = $scope.commandEntered.input;
				$scope.currentCommand = "Send? (Y/n) :";
				lastCommand = "Enter body :";
			}else if (state > 2) {
				$scope.currentCommand = "Send? (Y/n) :";
				lastCommand = "Send? (Y/n) :";
				if (command.toUpperCase() === 'Y') {
					printCommand();
					send();
					return;
				}else  if (command.toLowerCase() === 'n'){
					$state.go('landing-page')
				}
			}
			
			printCommand();
			state = state + 1;
		}
		$scope.gotoBottom();
	}

	$scope.gotoBottom = function() {
    	// $location.hash('bottom');
      	$anchorScroll('bottom');
    };

    function send() {
    	$scope.hideOriginalInput = true;
    	$('#directory-here').append(`
		<span class="entered-command-contact">Sending...</span><br>`);

		$http({
    		method: 'POST',
    		url: 'http://localhost:7777/api/mailer',
    		data:$scope.message
    	}).then(function successCallback(response) {
    		$scope.hideOriginalInput = true;
			$('#directory-here').append(`
			<span class="entered-command-contact">Message sent!</span><br>`);
			
			$timeout(function (argument) {
				$('#directory-here').append(`
				<span class="entered-command-contact">Redirecting...</span><br>`);
			}, 2000);

			$timeout(function (argument) {
				$state.go('landing-page');
			}, 4000);

		}, function errorCallback(response) {
			$scope.hideOriginalInput = false;
			printError('Error sending message!');
		});
    }

    function printCommand() {
    	$('#directory-here').append(`
		<b class="color-green">`+lastCommand+`</b>
		<span class="entered-command-contact">`+$scope.commandEntered.input+`</span><br>`);
		$scope.commandEntered = {};
    }

    function printError(arg) {
    	$('#directory-here').append(`
		<b class="color-green">`+lastCommand+`</b>
		<span class="error-text">`+arg+`</span><br>`);
		$scope.commandEntered = {};
    }
}])
