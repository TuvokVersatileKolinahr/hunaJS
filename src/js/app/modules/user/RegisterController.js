/**
 * Registers a new user. After signing up, the user gets an activation code per mail. With this 
 * code, the user can activate his account.
 */
app.controller('RegisterController', function($scope, $location){

  /**
   * Cancels the registration and takes the user back to the main page
   */
	$scope.cancel = function(){
    $location.path('/');
  };

	$scope.register = function(){

		$scope.registered = !$scope.registered;

	};

});