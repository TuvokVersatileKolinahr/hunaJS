/**
 * Sign in an existing user with userID and password. Only active accounts can log in. 
 * When user signs in, he will be redirected to the dashboard.
 */
app.controller('LoginController', function($scope, $http){

	/**
	 * Tries to login the user, using the login form's fields
	 */
	$scope.login = function(){
    $http.post('/api/login', {
        username: $scope.form.username.$modelValue,
        password: $scope.form.password.$modelValue 
      })
      .success(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
      })
      .error(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
    });
	};

});