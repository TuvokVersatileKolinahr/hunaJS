app.factory("AuthService", function() {
  var isAuthenticated = function() {
    console.log("check you");
    return true;
  },
  saveLogin = function(data, status, headers, config) {
    console.log("Saving ... ", data, status, headers, config);
    return true;
  };

  return {
    isAuthenticated: isAuthenticated,
    saveLogin: saveLogin
  };
});