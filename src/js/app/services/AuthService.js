app.factory("AuthService", function($rootScope) {
  var isAuthenticated = function() {
    console.log("check you");
    if ($rootScope.user){
      return true;
    } else {
      return false;
    }
  },
  saveLogin = function(user) {
    console.log("Saving ... ", user);
    $rootScope.user = user;
    return true;
  },
  getToken = function() {
    return $rootScope.user.token;
  };

  return {
    isAuthenticated: isAuthenticated,
    saveLogin: saveLogin
  };
});