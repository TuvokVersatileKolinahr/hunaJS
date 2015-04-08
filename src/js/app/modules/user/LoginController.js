/**
 * Sign in an existing user with userID and password. Only active accounts can log in. 
 * When user signs in, he will be redirected to the dashboard.
 */
app.controller('LoginController', function($scope, $http, $location){

	/**
	 * Tries to login the user, using the login form's fields
	 */
	$scope.login = function(){
    $http({
      method: 'POST',
      url: '/api/login',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
      },
      data: {
        username: $scope.form.username.$modelValue,
        password: $scope.form.password.$modelValue
      }
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