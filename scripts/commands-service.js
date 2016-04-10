theGreenFox.service('commandsService', ['$http', '$q',
  function($http, $q){

    return {
        welcome : function () {
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

   	}
}]);
