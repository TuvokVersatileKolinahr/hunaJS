/**
 * Sign in an existing user with userID and password. Only active accounts can log in. 
 * When user signs in, he will be redirected to the dashboard.
 */
app.controller('LoginController', function($scope, $http){

	/**
	 * Tries to login the user, using the login form's fields
	 */
	$scope.login = function(){
    $http.post('/api/login', {msg:'hello word!'}).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
	};

});