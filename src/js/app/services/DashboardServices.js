app.service('DashboardServices', function($q){

  /**
   * Returns all domains which the current user is registered to
   */
  var mockHosts = [
    {'host':'elgervanboxtel.nl'}, 
    {'host':'wouterroosendaal.nl'}, 
    {'host':'tovok.nl'}
  ],
  getHosts = function(){
    return $q(function(resolve, reject) {
      resolve(mockHosts); 
    });
  };

  return {
    getHosts:getHosts
  };

});