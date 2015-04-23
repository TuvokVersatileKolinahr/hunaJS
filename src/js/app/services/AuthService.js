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
  clearLogin = function() {
    console.log("User in scope: ", $rootScope.auth.user);
    delete $rootScope.auth.user;
  },
  getToken = function() {
    return $rootScope.auth.user.token;
  };

  return {
    clearLogin: clearLogin,
    isAuthenticated: isAuthenticated,
    saveLogin: saveLogin
  };
});