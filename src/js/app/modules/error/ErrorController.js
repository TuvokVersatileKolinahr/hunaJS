/**
 * Main controller for the Huna JS app. Shows the main (index) page
 */
app.controller('ErrorController', function($scope, $location){

  $scope.parseError = function(){
    var a = "";
    a.asdf = asdf;
  };

  $scope.syntaxError = function(){
    eval("var a = b;");
  };

  $scope.uncaughtException = function(){
    throw new Error("Uncaught Exception...");
  };

});