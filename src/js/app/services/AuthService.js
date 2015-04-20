app.factory("AuthService", function($http, $q, $window) {
  isAuthenticated = function() {
    console.log("check you");
    return true;
  };

  return {
    isAuthenticated: isAuthenticated
  };
});