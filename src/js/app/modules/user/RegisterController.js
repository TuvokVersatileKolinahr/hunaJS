/**
 * Registers a new user. After signing up, the user gets an activation code per mail. With this 
 * code, the user can activate his account.
 */
app.controller('RegisterController', function($scope, $location, $http){
  /**
   * Cancels the registration and takes the user back to the main page
   */
	$scope.cancel = function(){
    $location.path('/');
  };

	$scope.register = function(){
    $http({
      method: 'POST',
      url: '/api/user/create',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
      },
      data: {
        username: $scope.form.username.$modelValue,
        email: $scope.form.email.$modelValue,
        password: $scope.form.password.$modelValue
      }
    }).success(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
        $scope.registered = !$scope.registered;
      }).
      error(function(data, status, headers, config) {
        console.log("data, status, headers, config", data, status, headers, config);
    });

	};

});