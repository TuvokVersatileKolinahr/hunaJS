/**
 * Registers a new user. After signing up, the user gets an activation code per mail. With this 
 * code, the user can activate his account.
 */
app.controller('RegisterController', function($scope, $location, $http){
  // $scope.user = {
  //   username: "henkie",
  //   fullname: "Henkie Henk",
  //   email: "henkie@henk.nl",
  //   password: "henkiehenk"
  // };
  // $scope.passwordretype = $scope.user.password;

  /**
   * Cancels the registration and takes the user back to the main page
   */
	$scope.cancel = function(){
    $location.path('/');
  };

	$scope.register = function(){
    
    $http.post('/api/user/create', {
        username: $scope.form.username.$modelValue,
        email: $scope.form.email.$modelValue,
        password: $scope.form.password.$modelValue
      }).
      success(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
    		$scope.registered = !$scope.registered;
      }).
      error(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
    });


	};

});