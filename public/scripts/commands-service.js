theGreenFox.service('commandsService', ['$http', '$q',
  function($http, $q){

    function getCommands() {
        return ['stackoverflow', 'github', 'linkedin', 'twitter', 'facebook', 'contact'];
    }

    return {
        version: function () {
            var date = new Date();
            return "Copyrigt (c) Jofferson Ramirez Tiquez "+date.getFullYear()+" v1.0.1";
        },

        endpoint: function () {
            return "http://jofftiquez.herokuapp.com";
        },

        welcome: function () {
            return $http.get('fixtures/welcome.json')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) {
                    console.log("ser",response);
                    return $q.reject(response.data);
                });
        },

        help: function () {
            var theCommand = `
            Usage : fox &lt;command&gt; <br>
            Where &lt;command&gt; is one of :<br>` + getCommands();

            // Where &lt;directories&gt; is one of <br>
            // about, contact;
            return theCommand;
        }, 

        links: function () {
            var links = {
                facebook: 'https://www.facebook.com/jofftiquez',
                twitter: 'https://twitter.com/jrtiquez',
                github: 'https://github.com/jofftiquez',
                stackoverflow: 'http://stackoverflow.com/users/2889614/the-green-foxx',
                linkedin: 'https://ph.linkedin.com/in/jofferson-tiquez-26265286'
            }
            return links;
        },

        commands: function () {
            return getCommands();
        },

        locations: function () {
            return ['about', 'contact']
        }
   	}
}]);
