app.factory("AuthService", function($rootScope) {
  var isAuthenticated = function() {
    console.log("check you");
    if ($rootScope.auth && $rootScope.auth.user) {
      return true;
    } else {
      return false;
    }
  },
  saveLogin = function(user) {
    console.log("Saving ... ", user);
    $rootScope.auth = user;
    return true;
  },
  getToken = function() {
    return $rootScope.auth.user.token;
  };

  return {
    isAuthenticated: isAuthenticated,
    saveLogin: saveLogin
  };
});