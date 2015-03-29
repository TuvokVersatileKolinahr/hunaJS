/**
 * Sign in an existing user with userID and password. Only active accounts can log in. 
 * When user signs in, he will be redirected to the dashboard.
 */
app.controller('LoginController', function($scope, $http, $location){

	/**
	 * Tries to login the user, using the login form's fields
	 */
	$scope.login = function(){
    $http.post('/api/login', {
        username: $scope.username,
        password: $scope.password 
      })
      .success(function(data, status, headers, config) {
        
        // Login succeeded, commence to dashboard
        $location.url("/dashboard");
      })
      .error(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
        
        // show an error
        $scope.error = true;

        // reset form
        $scope.login = {};
        $scope.form.$setPristine(); 
    });
	};

});